import { Item, RenderForm } from "@/components/custom";
import { FormTypes } from "@/ts/enums/form-types";
import { Grid2 } from "@mui/material";
import { Control, FieldErrors } from "react-hook-form";

interface FormItemsProps {
  control: Control<any>;
  errors: FieldErrors;
}

const UserInfoFormItems: React.FC<FormItemsProps> = ({ control, errors }) => {
  const formItems: Item[] = [
    {
      name: "firstName",
      label: "First Name",
      type: FormTypes.Text,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "lastName",
      label: "Last Name",
      type: FormTypes.Text,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "gender",
      label: "Gender",
      type: FormTypes.Radio,
      required: true,
      options: [
        { value: "female", label: "Female" },
        { value: "male", label: "Male" },
      ],
      size: { xs: 12, md: 6 },
    },
    {
      name: "birthDate",
      label: "Birth Date",
      type: FormTypes.Date,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "placeOfBirth",
      label: "Place of Birth",
      type: FormTypes.Select,
      required: true,
      options: ["Tehran", "Mashhad", "Shiraz"],
      size: { xs: 12, md: 6 },
    },
    {
      name: "postalCode",
      label: "Postal Code",
      type: FormTypes.Text,
      required: true,
      size: { xs: 12, md: 6 },
    },
    {
      name: "address",
      label: "Address",
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
