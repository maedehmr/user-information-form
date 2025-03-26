import { UserInfoState } from "@/ts/types/user-info";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserInfoInitialState: UserInfoState = {
  firstName: "",
  lastName: "",
  birthDate: 0,
  gender: "",
  placeOfBirth: "",
  address: "",
  postalCode: "",
};

const userInfoSlice = createSlice({
  name: "user-info",
  initialState: UserInfoInitialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfoState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
const userInfoReducer = userInfoSlice.reducer;
export default userInfoReducer;
