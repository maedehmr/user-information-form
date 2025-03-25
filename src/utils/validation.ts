import { z } from "zod";
import { localizedNumbers } from "./localized-numbers";

export const validation = {
  stringRequired: (field: string = "this field", min: number = 1) =>
    z
      .string()
      .trim()
      .min(1, { message: `${field} is required` })
      .min(min, { message: `${field} must be at least ${min}` }),

  numberRequired: (field: string = "this field", min: number = 1) =>
    z
      .number()
      .min(1, { message: `${field} is required` })
      .min(min, { message: `${field} must be at least ${min}` }),

  localizedNumberRequired: (field: string = "this field", length: number = 1) =>
    z
      .string()
      .trim()
      .min(1, { message: `${field} is required` })
      .length(length, {
        message: `${field} must be exactly ${length} characters`,
      })
      .regex(/^\d+$/, { message: `${field} must contain only numbers` })
      .transform(localizedNumbers),
};
