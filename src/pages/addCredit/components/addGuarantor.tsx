import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Guarantor } from "../../../types";

type SummaryProps = {
  formData: {
    activitySector: string;
    monthlyIncome: string;
    workExperienceYears: string;
    workExperienceMonths: string;
    region: string;
    businessAddress: string;

    currency: string;
    creditPurpose: string;
    amount: string;
    duration: string;
    interestRate: string;

    guarantor: Guarantor[];
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const AddGuarantor = ({ formData, setFormData }: SummaryProps) => {
  const [guarantors, setGuarantors] = useState<Guarantor[]>([]);
  const [guarantorData, setGuarantorData] = useState<Guarantor>({
    guarantorName: "",
    guarantorSurname: "",
    guarantorFin: "",
    guarantorMobile: "",
  });

  const handleGuarantorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuarantorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addGuarantor = () => {
    setGuarantors([...guarantors, guarantorData]);
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      guarantor: [...guarantors, guarantorData],
    }));
    formData.guarantor = guarantors;
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h6">Zamin əlavə et</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Ad"
          name="guarantorName"
          value={guarantorData.guarantorName}
          onChange={handleGuarantorChange}
          size="small"
        />
        <TextField
          label="Soyad"
          name="guarantorSurname"
          value={guarantorData.guarantorSurname}
          onChange={handleGuarantorChange}
          size="small"
        />
        <TextField
          label="FIN"
          name="guarantorFin"
          value={guarantorData.guarantorFin}
          onChange={handleGuarantorChange}
          size="small"
        />
        <TextField
          label="Əlaqə"
          name="guarantorMobile"
          value={guarantorData.guarantorMobile}
          onChange={handleGuarantorChange}
          size="small"
        />
        <Button variant="contained" onClick={addGuarantor}>
          Zamin əlavə et
        </Button>
      </Box>
      <Typography variant="h6" sx={{ marginTop: "2rem" }}>
        Əlavə olunmuş zaminlər
      </Typography>
      {formData.guarantor.length > 0 && (
        <Box>
          {formData.guarantor.map((g: Guarantor, index: number) => (
            <Typography key={index}>
              {g.guarantorName} {g.guarantorSurname} - {g.guarantorMobile}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AddGuarantor;
