import React, { FC } from "react";
import { InputAdornment } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import CustomNumericInput from "~/components/common/custom-input/CustomNumericInput";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>;
  error: any;
  itemProps?: any;
}

const UfCurrency: FC<Props> = ({
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
  itemProps,
  props,
}) => {
  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, name, value, onBlur } }) => {
        return (
          <CustomNumericInput
            {...form?.register(name, {
              ...rules,
            })}
            value={value ? Math.round(value / 10) : ""}
            onChange={(value) => {
              onChange({
                target: { value: value ? Number(value) * 10 : "" },
              });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>تومان</InputAdornment>
              ),
            }}
            onBlur={onBlur}
            fullWidth
            id={name}
            error={!!error}
            placeholder={placeholder}
            disabled={disabled}
            sx={sx}
            inputProps={{ readOnly: readonly }}
            {...itemProps}
            {...props}
          />
        );
      }}
    />
  );
};

export default UfCurrency;
