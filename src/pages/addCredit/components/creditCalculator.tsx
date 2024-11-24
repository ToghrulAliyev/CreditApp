import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface PaymentScheduleItem {
  month: number;
  principalPayment: string;
  interestPayment: string;
  remainingBalance: string;
}

const CreditCalculator = () => {
  const [creditDetails, setCreditDetails] = useState({
    amount: 0,
    duration: 0,
    interestRate: 0,
  });
  const [paymentSchedule, setPaymentSchedule] = useState<PaymentScheduleItem[]>(
    []
  );

  const handleCreditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreditDetails((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const generatePaymentSchedule = () => {
    const { amount, duration, interestRate } = creditDetails;
    let remainingBalance = amount;
    const monthlyRate = interestRate / 100 / 12;
    const fixedPayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration));
    const schedule = [];

    for (let i = 1; i <= duration; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = fixedPayment - interestPayment;
      remainingBalance -= principalPayment;
      schedule.push({
        month: i,
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        remainingBalance: remainingBalance.toFixed(2),
      });
    }

    setPaymentSchedule(schedule);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h6">Kredit Kalkulyatoru</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Məbləğ"
          name="amount"
          value={creditDetails.amount}
          onChange={handleCreditChange}
          type="number"
          size="small"
        />
        <TextField
          label="Müddət (ay)"
          name="duration"
          value={creditDetails.duration}
          onChange={handleCreditChange}
          type="number"
          size="small"
        />
        <TextField
          label="Faiz dərəcəsi (%)"
          name="interestRate"
          value={creditDetails.interestRate}
          onChange={handleCreditChange}
          type="number"
          size="small"
        />
        <Button variant="contained" onClick={generatePaymentSchedule}>
          Cədvəli generasiya et
        </Button>
      </Box>
      {paymentSchedule.length > 0 && (
        <Box sx={{ marginTop: "2rem" }}>
          <Typography variant="h6">Ödəniş cədvəli</Typography>
          {paymentSchedule.map((item: PaymentScheduleItem, index: number) => (
            <Typography key={index}>
              Ay {item.month}: Faiz {item.interestPayment} - Əsas{" "}
              {item.principalPayment}- Qalıq {item.remainingBalance}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default CreditCalculator;
