"use client";

import { UserInfoInitialState } from "@/lib/slices/user-info-slice";
import { UserInfoState } from "@/ts/types/user-info";
import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "@/schemas/user-info-schema";
import UserInfoFormItems from "../user-info-form-items/user-info-form-items";
import { useTranslations } from "next-intl";

const UserInfoForm = () => {
  const t = useTranslations();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: UserInfoInitialState,
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<UserInfoState> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography
        variant="h1"
        sx={{ fontSize: "1.6rem", fontWeight: 500, mb: 2.8 }}
      >
        {t("userInfoForm")}
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <UserInfoFormItems control={control} errors={errors} />
        <Button sx={{ mt: 2.8 }} type="submit">
          {t("submit")}
        </Button>
      </Box>
    </>
  );
};

export default UserInfoForm;
