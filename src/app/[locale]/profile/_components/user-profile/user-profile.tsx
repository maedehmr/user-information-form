"use client";

import { useAppSelector } from "@/lib/hooks";

const UserProfile = () => {
  const userInfo = useAppSelector((state) => state.userInfo);
  console.log("🚀 ~ UserProfile ~ userInfo:", userInfo);

  return <div>UserProfile</div>;
};

export default UserProfile;
