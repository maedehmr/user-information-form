import { UserInfoState } from "@/ts/types/user-info";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserInfoState = {
  firstName: "",
  lastName: "",
  birthDate: "",
  gender: "",
  placeOfBirth: "",
  address: "",
  postalCode: "",
};

const userInfoSlice = createSlice({
  name: "user-info",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfoState>) => {
      state = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
const userInfoReducer = userInfoSlice.reducer;
export default userInfoReducer;
