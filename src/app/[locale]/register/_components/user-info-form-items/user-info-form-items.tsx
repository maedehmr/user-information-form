import { Item, RenderForm } from "@/components/custom";
import { FormTypes } from "@/ts/enums/form-types";
import { Grid2 } from "@mui/material";
import { useTranslations } from "next-intl";
import { Control, FieldErrors } from "react-hook-form";

interface FormItemsProps {
  control: Control<any>;
  errors: FieldErrors;
}

const UserInfoFormItems: React.FC<FormItemsProps> = ({ control, errors }) => {
  const t = useTranslations();
  const formItems: Item[] = [
    {
      name: "firstName",
      label: t("firstName"),
      type: FormTypes.Text,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "lastName",
      label: t("lastName"),
      type: FormTypes.Text,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "gender",
      label: t("gender"),
      type: FormTypes.Radio,
      required: true,
      options: [
        { value: "female", label: t("female") },
        { value: "male", label: t("male") },
      ],
      size: { xs: 12, md: 6 },
    },
    {
      name: "birthDate",
      label: t("birthDate"),
      type: FormTypes.Date,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "placeOfBirth",
      label: t("placeOfBirth"),
      type: FormTypes.Select,
      required: true,
      options: [t("tehran"), t("mashhad"), t("shiraz")],
      size: { xs: 12, md: 6 },
    },
    {
      name: "postalCode",
      label: t("postalCode"),
      type: FormTypes.Text,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "address",
      label: t("address"),
      type: FormTypes.TextArea,
      required: true,
      rowsTextArea: 3,
      size: { xs: 12, md: 12 },
    },
  ];

  return (
    <Grid2 container spacing={2}>
      {formItems.map((item) => (
        <Grid2 key={item.name} size={item.size}>
          <RenderForm {...{ item, control, errors }} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default UserInfoFormItems;
