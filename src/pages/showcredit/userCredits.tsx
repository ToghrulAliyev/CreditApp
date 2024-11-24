import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {};

const UserCredits = (props: Props) => {
  const selectedUser = useSelector(
    (state: { user: { selectedUser: IUser | null } }) => state.user.selectedUser
  );
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        İstifadəçi və Kredit Siyahısı
      </Typography>

      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h6">
            {selectedUser?.name} {selectedUser?.surname}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>FIN:</strong> {selectedUser?.fin || "Müəyyən edilməmiş"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Telefon:</strong>{" "}
            {selectedUser?.mobileNumber || "Müəyyən edilməmiş"}
          </Typography>

          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Kreditlər
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />

          {!selectedUser ||
          !selectedUser.credit ||
          selectedUser.credit.length === 0 ? (
            <Typography variant="body2">
              Bu İstifadəçi üçün kredit tapılmadı.
            </Typography>
          ) : (
            selectedUser.credit.map((credit, creditIndex) => (
              <Box key={creditIndex} sx={{ marginBottom: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Sektor:</strong>{" "}
                      {credit.activitySector || "Müəyyən edilməmiş"}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Gəlir:</strong> {credit.monthlyIncome || 0}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Təcrübə:</strong> {credit.workExperienceYears} il,{" "}
                      {credit.workExperienceMonths} ay
                    </Typography>
                    <Typography variant="body2">
                      <strong>Bölgə:</strong>{" "}
                      {credit.region || "Müəyyən edilməmiş"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">
                      <strong>Miqdar:</strong> {credit.amount || 0}{" "}
                      {credit.currency}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Müddət:</strong> {credit.duration || 0} ay
                    </Typography>
                    <Typography variant="body2">
                      <strong>Faiz dərəcəsi:</strong> {credit.interestRate || 0}
                      %
                    </Typography>
                  </Grid>
                </Grid>

                <Typography variant="h6" sx={{ marginTop: 1 }}>
                  Zamin Məlumatları
                </Typography>
                <Divider sx={{ marginBottom: 1 }} />
                {credit.guarantor.length === 0 ? (
                  <Typography variant="body2">
                    Bu kredit üçün zamin tapılmadı.
                  </Typography>
                ) : (
                  credit.guarantor.map((guarantor, guarantorIndex) => {
                    return (
                      <Box key={guarantorIndex} sx={{ marginBottom: 1 }}>
                        <Typography variant="body2">
                          <strong>Ad:</strong>{" "}
                          {guarantor.guarantorName || "Müəyyən edilməmiş"}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Soyad:</strong>{" "}
                          {guarantor.guarantorSurname || "Müəyyən edilməmiş"}
                        </Typography>
                        <Typography variant="body2">
                          <strong>FIN:</strong>{" "}
                          {guarantor.guarantorFin || "Müəyyən edilməmiş"}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Telefon:</strong>{" "}
                          {guarantor.guarantorMobile || "Müəyyən edilməmiş"}
                        </Typography>
                      </Box>
                    );
                  })
                )}
              </Box>
            ))
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              size="small"
              variant="outlined"
              color="primary"
              sx={{ marginLeft: 2 }}>
              Geri qayıt
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserCredits;
