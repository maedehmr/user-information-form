import { z } from "zod";
import { localizedNumbers } from "./localized-numbers";

export const createValidation = (
  t: (key: string, values?: Record<string, any>) => string
) => ({
  stringRequired: (field: string = t("default"), min: number = 1) =>
    z
      .string()
      .trim()
      .min(1, { message: `${field} ${t("required")}` })
      .min(min, { message: `${field} ${t("min")} ${min}` }),

  numberRequired: (field: string = t("default"), min: number = 1) =>
    z
      .number()
      .min(1, { message: `${field} ${t("required")}` })
      .min(min, { message: `${field} ${t("min")} ${min}` }),

  localizedNumberRequired: (field: string = t("default"), length: number = 1) =>
    z
      .string()
      .trim()
      .min(1, { message: `${field} ${t("required")}` })
      .length(length, {
        message: `${field} ${t("length")} ${length}`,
      })
      .regex(/^\d+$/, { message: `${field} ${t("onlyNumber")}` })
      .transform(localizedNumbers),
});
