"use client";

import { useTranslations } from "next-intl";
import { createValidation } from "@/utils/validation";
import { z } from "zod";

export function useUserInfoSchema() {
  const tValidation = useTranslations("validation");
  const t = useTranslations();
  const validation = createValidation(tValidation);

  const userInfoSchema = z.object({
    firstName: validation.stringRequired(t("firstName")),
    lastName: validation.stringRequired(t("lastName")),
    birthDate: validation.numberRequired(t("birthDate")),
    gender: validation.stringRequired(t("gender")),
    placeOfBirth: validation.stringRequired(t("placeOfBirth")),
    address: validation.stringRequired(t("address")),
    postalCode: validation.localizedNumberRequired(t("postalCode"), 10),
  });

  return userInfoSchema;
}
