import { validation } from "@/utils/validation";
import { z } from "zod";

export const userInfoSchema = z.object({
  firstName: validation.stringRequired("First Name"),
  lastName: validation.stringRequired("Last Name"),
  birthDate: validation.numberRequired("Birth Date"),
  gender: validation.stringRequired("Gender"),
  placeOfBirth: validation.stringRequired("Place of Birth"),
  address: validation.stringRequired("Address"),
  postalCode: validation.localizedNumberRequired("Postal Code", 10),
});

export type UserInfoSchemaType = z.infer<typeof userInfoSchema>;
