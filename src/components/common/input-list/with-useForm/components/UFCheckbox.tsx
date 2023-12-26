import React, { FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>;
}

const UFCheckbox: FC<Props> = ({
  form,
  name,
  label,
  rules,
  disabled,
  sx,
}) => {
  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      render={({ field: { onChange, name, value } }) => (
        <FormControlLabel
          sx={sx}
          control={
            <Checkbox
              color="primary"
              checked={value}
              onChange={onChange}
              disabled={disabled}
              name={name}
            />
          }
          label={label}
        />
      )}
    />
  );
};

export default UFCheckbox;
