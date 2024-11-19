import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { fin, updatedUser } = action.payload;
      const index = state.users.findIndex((user) => user.fin === fin);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser: (state, action) => {
      const fin = action.payload;
      state.users = state.users.filter((user) => user.fin !== fin);
    },
  },
});

export const { addUsers, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
