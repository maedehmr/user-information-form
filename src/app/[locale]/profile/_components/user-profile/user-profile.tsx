"use client";

import { useAppSelector } from "@/lib/hooks";
import { PushNotificationManager, InstallPrompt } from "..";
import { Typography } from "@mui/material";

const UserProfile = () => {
  const userInfo = useAppSelector((state) => state.userInfo);

  return (
    <>
      <Typography>Welcome {userInfo?.firstName}</Typography>
      <PushNotificationManager />
      <InstallPrompt />
    </>
  );
};

export default UserProfile;
