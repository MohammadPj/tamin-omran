import React, { FC } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
import {checkIfNumber, p2e} from "~/helpers/methods";

interface Props extends IUseFormInput {
  form: UseFormReturn<any>
  error: any
  itemProps?: any
}

const UFTextField: FC<Props> = ({
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: any
  ) => {
    const value = e.target.value
    if (
      (type === 'number' && !checkIfNumber(e)) ||
      (rules?.maxLength && value.length > rules?.maxLength)
    )
      return

    onChange(p2e(value.trimStart()))
  }

  //This can be used when you want to show white space error
  // const trapSpacesForRequiredFields = (value: any) => {
  //   if (rules?.required) {
  //     return !!value.trim()
  //   } else return
  // }

  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <TextField
          {...form?.register(name, {
            ...rules,
            //This can be used when you want to show white space error
            // pattern: {
            //   ...rules?.pattern,
            //   message: 'مقدار ورودی نمی تواند فضای خالی باشد',
            //   value: /^\S*$/,
            // },
            // validate: value => trapSpacesForRequiredFields(value),
          })}
          value={field.value}
          onChange={e => handleChange(e, field.onChange)}
          type={type === 'number' ? 'text' : type}
          fullWidth
          id={name}
          error={!!error}
          placeholder={placeholder}
          sx={sx}
          disabled={disabled}
          inputProps={{ readOnly: readonly }}
          {...itemProps}
          {...props}
        />
      )}
    />
  )
}

export default UFTextField
