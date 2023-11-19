import React, { FC } from "react";
import {Controller, UseFormReturn} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>;
  error: any;
}

const UFTextArea: FC<Props> = ({
  form,
  name,
  type,
  defaultValue,
  sx,
  rules,
  readonly,
  disabled,
  placeholder,
  error,
  props
}) => {
  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, name, value, onBlur } }) => (
        <TextField
          {...form?.register(name, {
            ...rules,
          })}
          type={type}
          fullWidth
          multiline
          rows={3}
          id={name}
          error={error}
          placeholder={placeholder}
          sx={sx}
          disabled={disabled}
          inputProps={{ readOnly: readonly }}
          {...props}
        />
      )}
    />
  );
};

export default UFTextArea;
