import React, { FC } from 'react'

//@3rd Party
import { Controller } from 'react-hook-form'
import { UseFormReturn } from 'react-hook-form'
//----------------------------------------------------------------------------------------------

// @Mui
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
import Typography from "@mui/material/Typography";
import UFSelect from "~/components/common/input-list/with-useForm/components/UFSelect";
import UFMultiSelect from "~/components/common/input-list/with-useForm/components/UFMultiSelect";
import UFAutoComplete from "~/components/common/input-list/with-useForm/components/UFAutoComplete";
import UFCheckbox from "~/components/common/input-list/with-useForm/components/UFCheckbox";
import UFDatePicker from "~/components/common/input-list/with-useForm/components/UFDatePicker";
import UFTextArea from "~/components/common/input-list/with-useForm/components/UFTextArea";
import UfCurrency from "~/components/common/input-list/with-useForm/components/UFCurrency";
import UFTextField from "~/components/common/input-list/with-useForm/components/UFTextField";
//----------------------------------------------------------------------------------------------

// @Components


//---------------------------------------------------------------------------------------------------------

export interface IUseFormInputProps extends IUseFormInput {
  form: UseFormReturn<any>
  error: any
  itemProps?: any
}

const UseFormInput: FC<IUseFormInputProps> = ({
  name,
  label,
  type,
  options,
  form,
  error,
  placeholder,
  defaultValue,
  sx,
  rules,
  readonly,
  disabled,
  props,
  itemProps,
}) => {
  switch (type) {
    case 'radio':
      return (
        <Controller
          control={form?.control}
          name={name}
          rules={{ ...rules }}
          defaultValue={defaultValue}
          render={({ field: { onChange, name, value } }) => (
            <FormControl sx={{ display: 'block' }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={onChange}
                value={value}
                sx={{gap: 5}}
                {...props}
              >
                {options?.map(option => (
                  <FormControlLabel
                    key={option.value}
                    disabled={disabled}
                    value={option.value}
                    control={<Radio />}
                    label={<Typography fontWeight={400} fontSize={12}>{option.label}</Typography>}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
      )
    case 'select':
      return (
        <UFSelect
          form={form}
          error={error}
          name={name}
          label={label}
          placeholder={placeholder}
          sx={sx}
          rules={rules}
          disabled={disabled}
          readonly={readonly}
          defaultValue={defaultValue}
          options={options}
          props={props}
        />
      )
    case 'multi-select':
      return (
        <UFMultiSelect
          form={form}
          error={error}
          name={name}
          label={label}
          placeholder={placeholder}
          sx={sx}
          rules={rules}
          disabled={disabled}
          readonly={readonly}
          defaultValue={defaultValue}
          options={options}
          props={props}
        />
      )
    case "auto-complete":
      return (
        <UFAutoComplete
          form={form}
          error={error}
          name={name}
          label={label}
          placeholder={placeholder}
          sx={sx}
          rules={rules}
          disabled={disabled}
          readonly={readonly}
          defaultValue={defaultValue}
          options={options}
        />
      );
    case 'checkbox':
      return (
        <UFCheckbox
          form={form}
          name={name}
          label={label}
          rules={rules}
          disabled={disabled}
          sx={sx}
          props={props}
        />
      )
    case 'date-picker':
      return (
        <UFDatePicker
          form={form}
          error={error}
          name={name}
          label={label}
          rules={rules}
          disabled={disabled}
          readonly={readonly}
          defaultValue={defaultValue}
          props={props}
        />
      )
    case 'text-area':
      return (
        <UFTextArea
          form={form}
          error={error}
          name={name}
          label={label}
          type={type}
          sx={sx}
          rules={rules}
          disabled={disabled}
          defaultValue={defaultValue}
          readonly={readonly}
          placeholder={placeholder}
          props={props}
        />
      )
    case 'currency':
      return (
        <UfCurrency
          form={form}
          error={error}
          name={name}
          label={label}
          type={type}
          sx={sx}
          rules={rules}
          disabled={disabled}
          defaultValue={defaultValue}
          readonly={readonly}
          placeholder={placeholder}
          itemProps={itemProps}
          props={props}
        />
      )
    default:
      return (
        <UFTextField
          form={form}
          error={error}
          name={name}
          label={label}
          type={type}
          sx={sx}
          rules={rules}
          disabled={disabled}
          defaultValue={defaultValue}
          readonly={readonly}
          placeholder={placeholder}
          itemProps={itemProps}
          props={props}
        />
      )
  }
}

export default UseFormInput
