import React, { FC } from "react";
import FormControl from "@mui/material/FormControl";
import { Autocomplete, InputLabel } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>;
  error: any;
}

const UFAutoComplete: FC<Props> = ({
  form,
  error,
  placeholder,
  sx,
  rules,
  disabled,
  name,
  options,
  defaultValue,
  readonly,
  controlWidth,
}) => {
  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue}
      render={({ field }) => (
        // <FormControl sx={{ border: "1px solid red", width: "100%" }}>
        <FormControl fullWidth>
          {(!field.value || (field.value && field.value?.length === 0)) && (
            <InputLabel id="demo-simple-select-label">
              {placeholder || "Select items"}
            </InputLabel>
          )}

          <Autocomplete
            {...field}
            freeSolo
            onChange={(e, newValue) => {
              field.onChange(newValue);
            }}
            onInputChange={(e, newValue) => {
              field.onChange({label: newValue, value: ""});
            }}
            id={name}
            disabled={disabled}
            options={options || []}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => {
              return option.value === value.value;
            }}

            renderInput={(params) => (
              <TextField
                {...params}
                variant={"filled"}
                size={"small"}
                error={error}
                sx={{
                  "& > div": {
                    py: '9px !important',
                  },
                }}
              />
            )}
            sx={sx}
          />
        </FormControl>
      )}
    />
  );
};

export default UFAutoComplete;
