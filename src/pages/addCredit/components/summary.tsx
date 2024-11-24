import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddCredit from "../addCredit";
import { addCredit } from "../../../store/userSlice";
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
};

const Summary = ({ formData }: SummaryProps) => {
  const selectedUser = useSelector((state: any) => state.user.selectedUser);
  const allUsers = useSelector((state: any) => state.user.users);

  const dispatch = useDispatch();
  const confirmCredit = () => {
    dispatch(addCredit({ fin: selectedUser.fin, credit: formData }));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">Xülasə</Typography>
      <Typography>Fəaliyyət sektoru: {formData.activitySector}</Typography>
      <Typography>Aylıq gəliri: {formData.monthlyIncome}</Typography>
      <Typography>İş təcrübəsi (il): {formData.workExperienceYears}</Typography>
      <Typography>
        İş təcrübəsi (ay): {formData.workExperienceMonths}
      </Typography>
      <Typography>Region: {formData.region}</Typography>
      <Typography>Biznes ünvanı: {formData.businessAddress}</Typography>
      <Typography>Valyuta: {formData.currency}</Typography>
      <Typography>Kreditin məqsədi: {formData.creditPurpose}</Typography>
      <Typography>Məbləğ: {formData.amount}</Typography>
      <Typography>Müddət: {formData.duration}</Typography>
      <Typography>Faiz: {formData.interestRate}</Typography>
      {formData.guarantor.map((guarantor, index) => (
        <Box key={index}>
          <Typography>Zaminin adı: {guarantor.guarantorName}</Typography>
          <Typography>Zaminin soyadı: {guarantor.guarantorSurname}</Typography>
          <Typography>Zaminin FİN: {guarantor.guarantorFin}</Typography>
          <Typography>Zaminin əlaqəsi: {guarantor.guarantorMobile}</Typography>
        </Box>
      ))}
      {/* Add confirmation or action buttons if necessary */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => confirmCredit()}>
        Krediti Təsdiq Et
      </Button>
    </Box>
  );
};

export default Summary;
