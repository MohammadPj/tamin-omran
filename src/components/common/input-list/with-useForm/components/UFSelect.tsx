import React, { FC } from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Controller, UseFormReturn } from "react-hook-form";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>;
  error: any;
}

const UFSelect: FC<Props> = ({
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
  props
}) => {
  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {placeholder || "انتخاب کنید"}
          </InputLabel>
          <Select
            {...field}
            error={error}
            // value={form.watch(name)}
            id={name}
            disabled={disabled}
            defaultValue={defaultValue}
            variant={"filled"}
            inputProps={{ readOnly: readonly }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 250,
                  width: 50,
                },
              },
            }}
            sx={sx}
            {...props}
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value} id={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default UFSelect;
