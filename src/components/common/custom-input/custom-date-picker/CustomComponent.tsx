import React, {FC} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import {StandardTextFieldProps} from "@mui/material/TextField";

interface Props extends StandardTextFieldProps{
  openCalendar: any;
  value: any;
  handleValueChange?: () => void
  disabled?: boolean;
  error: boolean
}

const CustomComponent: FC<Props> = ({ openCalendar, value, handleValueChange, disabled, error, ...rest }) => {
  return (
    <TextField
      placeholder="انتخاب کنید"
      error={error}
      fullWidth
      sx={{
        "& .MuiFormHelperText-root": {
          position: "absolute",
          top: 55,
          left: 0,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            calender icon
          </InputAdornment>
        ),
      }}
      disabled={disabled}
      value={value}
      onFocus={openCalendar}
      onClick={openCalendar}
      onChange={handleValueChange}
      {...rest}
    />
  );
};

export default CustomComponent;
