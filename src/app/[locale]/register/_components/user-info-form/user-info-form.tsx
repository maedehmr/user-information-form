"use client";

import {
  setUserInfo,
  UserInfoInitialState,
} from "@/lib/slices/user-info-slice";
import { UserInfoState } from "@/ts/types/user-info";
import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "@/schemas/user-info-schema";
import UserInfoFormItems from "../user-info-form-items/user-info-form-items";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";

const UserInfoForm = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: UserInfoInitialState,
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<UserInfoState> = (data) => {
    dispatch(setUserInfo(data));
    router.push("/profile");
  };

  return (
    <>
      <Typography
        variant="h1"
        sx={{ fontSize: "1.6rem", fontWeight: 500, my: 2.8 }}
      >
        {t("userInfoForm")}
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <UserInfoFormItems control={control} errors={errors} />
        <Button sx={{ my: 2.8 }} type="submit">
          {t("submit")}
        </Button>
      </Box>
    </>
  );
};

export default UserInfoForm;
