"use client";

import ReactMultiDatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import type { Value } from "react-multi-date-picker";
import { Box, TextField } from "@mui/material";
import { ReactNode } from "react";

interface DatePickerProps {
  label: string;
  value?: Value;
  onChange: (date: DateObject) => void;
  minDate?: Value;
  maxDate?: Value;
  disabled?: boolean;
  helperText?: ReactNode;
  error?: boolean;
  required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  label,
  helperText,
  error,
  required,
}) => {
  const handleDatePicker = (date: any) => {
    onChange(date);
  };

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

  return (
    <Box
      sx={{
        ".rmdp-container": {
          width: "100%",
        },
      }}
    >
      <ReactMultiDatePicker
        value={value || ""}
        onChange={(date: DateObject) => handleDatePicker(date)}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        maxDate={maxDate || ""}
        minDate={minDate || ""}
        render={(value, openCalendar) => {
          return (
            <TextField
              onFocus={openCalendar}
              onChange={handleDatePicker}
              fullWidth
              {...{ helperText, label, value, error, required }}
            />
          );
        }}
        {...{
          disabled,
          weekDays,
        }}
      />
    </Box>
  );
};

export default DatePicker;
