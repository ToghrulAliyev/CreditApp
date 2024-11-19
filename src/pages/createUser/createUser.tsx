import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { ArrowBack, Home, Phone } from "@mui/icons-material";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import { addUsers, updateUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form, useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {};

const createUser = (props: Props) => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    physicalAddress: "",
    fin: "",
    series: "AA",
    code: "",
    name: "",
    surname: "",
    fathersName: "",
    registrationAddress: "",
    dateOfBirth: "",
    mobileNumber: "",
    homeNumber: "",
  });
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    let { name, value } = e.target;
    if (name === "fin") {
      value = value.toUpperCase();
    }
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const submit = (data: any) => {
    if (editMode) {
      dispatch(updateUser({ fin: userData.fin, updatedUser: userData }));
    } else {
      dispatch(addUsers(userData));
    }
    navigate("/");
  };

  const location = useLocation();
  const user = location.state?.user;
  useEffect(() => {
    if (user) {
      setEditMode(true);
      setUserData(user);
    }
  }, [user]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ marginTop: "2.5rem" }}>
        <IconButton color="primary" onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>
      </Box>

      <form onSubmit={handleSubmit(submit)}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "2rem",
            width: "100%",
          }}>
          <CardContent
            component="div"
            sx={{
              borderRadius: "0.3rem",
              width: "30rem",
              height: "auto",
              marginTop: "16px",
              border: "1px solid #e0e0e0",
              padding: "1rem",
            }}>
            <Typography
              gutterBottom
              sx={{
                color: "text.secondary",
                fontSize: 14,
                marginBottom: "1rem",
              }}>
              {editMode ? "Redaktə et  " : "Müştəri əlavə et"}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                name="physicalAddress"
                label="Faktiki ünvan"
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
                value={userData.physicalAddress}
                onChange={handleChange}
                size="small"
              />

              <TextField
                label="FIN"
                name="fin"
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
                value={userData.fin}
                onChange={handleChange}
                disabled={editMode}
                size="small"
              />

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  defaultValue={"AA"}
                  label="Seriya"
                  name="series"
                  variant="outlined"
                  // value={userData.series}
                  disabled={true}
                  sx={{ marginBottom: "1rem", flex: 1 }}
                  size="small"
                />
                <TextField
                  label="Kod"
                  name="code"
                  variant="outlined"
                  value={userData.code}
                  sx={{ marginBottom: "1rem", flex: 1 }}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              <TextField
                label="Ad"
                name="name"
                variant="outlined"
                sx={{ marginBottom: "1rem", flex: 1 }}
                value={userData.name}
                onChange={handleChange}
                size="small"
              />
              <TextField
                label="Soyad"
                name="surname"
                variant="outlined"
                sx={{ marginBottom: "1rem", flex: 1 }}
                value={userData.surname}
                onChange={handleChange}
                size="small"
              />
              <TextField
                label="Ata adı"
                name="fathersName"
                variant="outlined"
                sx={{ marginBottom: "1rem", flex: 1 }}
                value={userData.fathersName}
                onChange={handleChange}
                size="small"
              />

              <TextField
                label="Qeydiyyat ünvanı"
                name="registrationAddress"
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
                value={userData.registrationAddress}
                onChange={handleChange}
                size="small"
              />
              <TextField
                label="Doğum tarixi"
                name="dateOfBirth"
                variant="outlined"
                type="date"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{ marginBottom: "1rem" }}
                value={userData.dateOfBirth}
                onChange={handleChange}
                size="small"
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Mobil Nömrə"
                  name="mobileNumber"
                  variant="outlined"
                  type="tel"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{ marginBottom: "1rem", flex: 1 }}
                  value={userData.mobileNumber}
                  onChange={handleChange}
                  size="small"
                />
                <TextField
                  label="Ev Nömrəsi"
                  name="homeNumber"
                  variant="outlined"
                  type="tel"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="start">
                          <Home />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{ marginBottom: "1rem", flex: 1 }}
                  value={userData.homeNumber}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              {/* Submit Button */}
              <Button
                onClick={() => navigate("/")}
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}>
                {editMode ? "Update Customer" : "Register Customer"}
              </Button>
            </Box>
          </CardContent>
        </Box>
      </form>
      {/* <div style={{ position: "absolute", top: 0 }}>
        {JSON.stringify(userData, null, 2)}
      </div> */}
    </Box>
  );
};

export default createUser;
