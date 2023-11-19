import React, { FC } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import DatePicker, { CalendarProps, DateObject } from "react-multi-date-picker";
import { StandardTextFieldProps } from "@mui/material/TextField";
import CustomComponent from "~/components/common/custom-input/custom-date-picker/CustomComponent";

const weekDays = ["شنبه", "1شنبه", "2شنبه", "3شنبه", "4شنبه", "5شنبه", "جمعه"];

interface props extends CalendarProps {
  error: boolean;
  textFieldProps?: StandardTextFieldProps;
}

const CustomDatePicker: FC<props> = ({
  onChange,
  value,
  disabled,
  error,
  textFieldProps,
  ...rest
}) => {
  const handleChange = (selectedDates: DateObject | null): void => {
    if (onChange && selectedDates) {
      const convertDate = new Date(selectedDates.toDate());

      onChange(convertDate as any);
    }
  };

  return (
    <DatePicker
      className={"custom-calendar"}
      weekDays={weekDays}
      value={value ? new Date(value as any) : null}
      onChange={handleChange}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      editable={false}
      disabled={disabled}
      {...rest}
      render={
        <CustomComponent
          id={"ds"}
          error={error}
          disabled={disabled}
          openCalendar={undefined}
          value={value}
          handleValueChange={undefined}
          {...textFieldProps}
        />
      }
    />
  );
};

export default CustomDatePicker;
