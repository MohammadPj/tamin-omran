import React, { FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
import CustomDatePicker from "~/components/common/custom-input/custom-date-picker/CustomDatePicker";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>;
  error: any;
}

const UFDatePicker: FC<Props> = ({
  form,
  rules,
  disabled,
  defaultValue,
  name,
  error,
}) => {
  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue}
      render={({ field: { onChange, name, value } }) => (
        <CustomDatePicker
          textFieldProps={{id: name}}
          error={error}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};

export default UFDatePicker;
