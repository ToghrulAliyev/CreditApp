import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, setSelectedUser } from "./store/userSlice";
import { IUser } from "./types";

function App() {
  const [fin, setFin] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSearchFin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFin(event.target.value.toLocaleUpperCase());
  };
  const users = useSelector(
    (state: { user: { users: IUser[] } }) => state.user.users
  );

  const handleDeleteUser = (fin: string) => {
    dispatch(deleteUser(fin));
  };

  const editUser = (userToEdit: IUser) => {
    navigate("/createUser", { state: { user: userToEdit } });
  };

  function filterUser() {
    const filteredUsers = users.filter((user) => user.fin.includes(fin));
    setFilteredUsers(filteredUsers);
  }

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  function clearSearch() {
    setFin("");
    setFilteredUsers(users);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "2rem",
        alignItems: "center",
      }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            label="FİN Axtar"
            variant="outlined"
            type="text"
            value={fin}
            onChange={handleSearchFin}
            size="small"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                filterUser();
              }
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => filterUser()}>
                      <SearchIcon />
                    </IconButton>
                    {fin.length > 0 ? (
                      <IconButton onClick={() => clearSearch()}>
                        <ClearIcon />
                      </IconButton>
                    ) : null}
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            onClick={() => navigate("/createUser")}
            variant="contained"
            color="primary">
            İstifadəçi Əlavə Et
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "left",
          padding: "2rem",
          width: "100%",
          margin: "0 auto",
        }}>
        {users.length > 0
          ? filteredUsers.map((item: IUser) => (
              <div key={item.fin}>
                <CardContent
                  component="div"
                  sx={{
                    borderRadius: "0.3rem",
                    width: "35rem",
                    height: "auto",
                    marginTop: "16px",
                    border: "1px solid #e0e0e0",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                  <Typography
                    gutterBottom
                    sx={{ color: "black", fontSize: 22 }}>
                    Müştəri Məlumatı
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 14,
                          lineHeight: "1.7",
                          fontWeight: "bold",
                          textWrap: " nowrap",
                        }}>
                        Faktiki ünvan:
                      </Typography>
                      {item.physicalAddress || " "}
                    </Box>

                    <Box sx={{ display: "flex", gap: "1rem" }}>
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 14,
                          lineHeight: "1.7",
                          fontWeight: "bold",
                        }}>
                        FIN:
                      </Typography>
                      {item.fin || " "}
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Seriya :
                        </Typography>{" "}
                        {item.series || " "}
                      </Box>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Kod:
                        </Typography>{" "}
                        {item.code || " "}
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Ad:
                        </Typography>{" "}
                        {item.name || " "}
                      </Box>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Soyad:
                        </Typography>{" "}
                        {item.surname || " "}
                      </Box>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Ata adı:
                        </Typography>{" "}
                        {item.fathersName || " "}
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: "1rem" }}>
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 14,
                          lineHeight: "1.7",
                          fontWeight: "bold",
                          textWrap: " nowrap",
                        }}>
                        Qeydiyyat ünvanı:
                      </Typography>{" "}
                      {item.registrationAddress || " "}
                    </Box>

                    <Box sx={{ display: "flex", gap: "1rem" }}>
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 14,
                          lineHeight: "1.7",
                          fontWeight: "bold",
                        }}>
                        Doğum tarixi:
                      </Typography>{" "}
                      {item.dateOfBirth || " "}
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Mobil:
                        </Typography>{" "}
                        {item.mobileNumber || " "}
                      </Box>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Typography
                          gutterBottom
                          sx={{
                            color: "black",
                            fontSize: 14,
                            lineHeight: "1.7",
                            fontWeight: "bold",
                          }}>
                          Ev:
                        </Typography>{" "}
                        {item.homeNumber || " "}
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      onClick={() => {
                        navigate("/usercredits"),
                          dispatch(setSelectedUser(item));
                      }}
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "1rem" }}>
                      KREDİTLƏRİ GÖR
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("/addcredit"), dispatch(setSelectedUser(item));
                      }}
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "1rem" }}>
                      KREDİT Yarat
                    </Button>
                    <Button
                      onClick={() => editUser(item)}
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "1rem" }}>
                      DÜZƏLİŞ ET
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleDeleteUser(item.fin)}
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "1rem" }}>
                      SİL
                    </Button>
                  </Box>
                </CardContent>
              </div>
            ))
          : null}
      </Box>
    </Box>
  );
}

export default App;
