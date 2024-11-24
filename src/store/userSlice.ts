import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";
interface UserState {
  users: IUser[];
  selectedUser: IUser | null;
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
    addCredit: (state, action) => {
      const { fin, credit } = action.payload;
      const index = state.users.findIndex((user) => user.fin === fin);
      if (index !== -1) {
        state.users[index].credit = [
          ...(state.users[index].credit || []),
          credit,
        ];
      }
    },
    setSelectedUser: (state, action: PayloadAction<IUser | null>) => {
      state.selectedUser = action.payload;
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

export const { addUsers, updateUser, deleteUser, setSelectedUser, addCredit } =
  userSlice.actions;

export default userSlice.reducer;
