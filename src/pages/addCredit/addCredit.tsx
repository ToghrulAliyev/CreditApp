import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {};

const AddCredit = (props: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    activitySector: "",
    monthlyIncome: "",
    workExperienceYears: "",
    workExperienceMonths: "",
    region: "",
    businessAddress: "",

    currency: "",
    creditPurpose: "",
    amount: "",
    duration: "",
    interestRate: "",
  });

  const steps = [
    "Şəxs haqqında məlumat",
    "Kredit barədə məlumat",
    "Zaminin əlavəsi",
    "Kredit Kalkulyatoru",
    "Xülasə",
  ];

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = () => {
    console.log("Final Form Data:", formData);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Yeni Kredit Müraciəti
      </Typography>

      <Stepper activeStep={activeStep} sx={{ width: "100%", mb: 3 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form
        onSubmit={handleSubmit(
          activeStep === steps.length - 1 ? submitForm : handleNext
        )}
        style={{ width: "100%", maxWidth: "600px" }}>
        {activeStep === 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Fəaliyyət sektoru"
              name="activitySector"
              variant="outlined"
              value={formData.activitySector}
              onChange={handleInputChange}
            />
            <TextField
              label="Aylıq gəliri"
              name="monthlyIncome"
              variant="outlined"
              type="number"
              value={formData.monthlyIncome}
              onChange={handleInputChange}
            />
            <TextField
              label="İş təcrübəsi (il)"
              name="workExperienceYears"
              variant="outlined"
              type="number"
              value={formData.workExperienceYears}
              onChange={handleInputChange}
            />
            <TextField
              label="İş təcrübəsi (ay)"
              name="workExperienceMonths"
              variant="outlined"
              type="number"
              value={formData.workExperienceMonths}
              onChange={handleInputChange}
            />
            <TextField
              label="Region"
              name="region"
              variant="outlined"
              value={formData.region}
              onChange={handleInputChange}
            />
            <TextField
              label="Biznes ünvanı"
              name="businessAddress"
              variant="outlined"
              value={formData.businessAddress}
              onChange={handleInputChange}
            />
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Valyuta"
              name="currency"
              variant="outlined"
              value={formData.currency}
              onChange={handleInputChange}
            />
            <TextField
              label="Biznes kreditin məqsədi"
              name="creditPurpose"
              variant="outlined"
              value={formData.creditPurpose}
              onChange={handleInputChange}
            />
            <TextField
              label="Məbləğ"
              name="amount"
              variant="outlined"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
            />
            <TextField
              label="Müddət"
              name="duration"
              variant="outlined"
              type="number"
              value={formData.duration}
              onChange={handleInputChange}
            />
            <TextField
              label="Faiz"
              name="interestRate"
              variant="outlined"
              type="number"
              value={formData.interestRate}
              onChange={handleInputChange}
            />
          </Box>
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Geri
          </Button>
          <Button type="submit" variant="contained">
            {activeStep === steps.length - 1 ? "Tamamla" : "İrəli"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddCredit;
