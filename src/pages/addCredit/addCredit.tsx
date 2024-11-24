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
import AddGuarantor from "./components/addGuarantor";
import CreditCalculator from "./components/creditCalculator";
import Summary from "./components/summary";

type Props = {};

const AddCredit = (props: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    activitySector: "Developer",
    monthlyIncome: "5000",
    workExperienceYears: "5",
    workExperienceMonths: "8",
    region: "Baku",
    businessAddress: "Burncode",
    currency: "₼",
    creditPurpose: "Startup",
    amount: "25000",
    duration: "2",
    interestRate: "10",
    guarantor: [],
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
    navigate("/");
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
        {activeStep === 2 && (
          <AddGuarantor setFormData={setFormData} formData={formData} />
        )}
        {activeStep === 3 && <CreditCalculator />}
        {activeStep === 4 && <Summary formData={formData} />}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Geri
          </Button>
          <Button type="submit" variant="contained">
            {activeStep === steps.length - 1 ? "Tamamla" : "İrəli"}
          </Button>
        </Box>
      </form>

      <Box sx={{ mt: 3, width: "100%", maxWidth: "600px", marginTop: "5rem" }}>
        <Button
          sx={{ width: "100%" }}
          color="secondary"
          onClick={() => navigate("/")}
          variant="contained">
          Ana Səhifəyə Qayıt
        </Button>
      </Box>
    </Box>
  );
};

export default AddCredit;
