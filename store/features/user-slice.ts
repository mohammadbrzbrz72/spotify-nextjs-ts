import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    fullname: "jack jackZade",
    age: 12,
    gender: "male",
  },
  reducers: {
    // : PayloadAction<number>
    newUser: (state, { payload }) => {
      state.fullname = payload.fullname;
      state.age = payload.age;
      state.gender = payload.gender;
    },
    removeUser(state) {
      state.fullname = "";
      state.age = 0;
      state.gender = "";
    },
  },
});

export default userSlice;
