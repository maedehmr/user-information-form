"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  GridBaseProps,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import DatePicker from "../date-picker/date-picker";
import { FormTypes } from "@/ts/enums/form-types";

export interface ItemBase {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
  size?: GridBaseProps["size"];
  rowsTextArea?: number;
  sx?: SxProps<Theme>;
}

export interface TextItemType extends ItemBase {
  type: FormTypes.Text | FormTypes.TextArea;
}

export interface SelectItemType extends ItemBase {
  type: FormTypes.Select;
  options: string[];
}

export interface RadioItemType extends ItemBase {
  type: FormTypes.Radio;
  options: { value: string; label: string; disabled?: boolean }[];
}

export interface DateItemType extends ItemBase {
  type: FormTypes.Date;
}

export type Item = TextItemType | SelectItemType | RadioItemType | DateItemType;

interface RenderFormProps {
  item: Item;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  control?: Control<any>;
  errors?: FieldErrors;
}

const RenderForm = ({ item, disabled, control, errors }: RenderFormProps) => {
  const { type, name, label, required, helperText, rowsTextArea, sx } = item;

  switch (type) {
    case FormTypes.Text:
    case FormTypes.TextArea:
      return (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              key={name}
              value={field.value}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              rows={type === "textArea" ? rowsTextArea : undefined}
              multiline={type === "textArea"}
              fullWidth
              error={!!errors?.[name]}
              helperText={errors?.[name]?.message?.toString() || helperText}
              {...{ disabled, required, label, sx }}
            />
          )}
        />
      );

    case FormTypes.Select:
      return (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors?.[name]} required={required}>
              <InputLabel>{label}</InputLabel>
              <Select
                {...field}
                id={name}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                {...{
                  label,
                  disabled,
                  required,
                  sx,
                }}
              >
                {(item as SelectItemType).options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors?.[name]?.message?.toString() || helperText}
              </FormHelperText>
            </FormControl>
          )}
        />
      );

    case FormTypes.Date:
      return (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              key={name}
              value={field.value}
              onChange={(value) => {
                field.onChange(value?.toUnix());
              }}
              helperText={errors?.[name]?.message?.toString() || helperText}
              error={!!errors?.[name]}
              {...{ disabled, required, label, sx }}
            />
          )}
        />
      );

    case FormTypes.Radio:
      return (
        <Box {...{ sx }}>
          <Controller
            key={name}
            name={name}
            control={control}
            render={({ field }) => (
              <FormControl error={!!errors?.[name]}>
                {label && <FormLabel {...{ required }}>{label}</FormLabel>}
                <RadioGroup
                  {...field}
                  row
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                >
                  {(item as RadioItemType).options.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                      disabled={option.disabled}
                    />
                  ))}
                </RadioGroup>
                <FormHelperText>
                  {errors?.[name]?.message?.toString() || helperText}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Box>
      );

    default:
      return null;
  }
};

export default RenderForm;
