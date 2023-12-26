import React, { FC } from 'react'

//@3rd Party
import { Controller, UseFormReturn } from 'react-hook-form'
//----------------------------------------------------------------------------------

//@Mui
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import FormControl from '@mui/material/FormControl'
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
//----------------------------------------------------------------------------------

interface Props extends IUseFormInput {
  form: UseFormReturn<any>
  error: any
}

const UFMultiSelect: FC<Props> = ({
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
  props,
}) => {
  // const [optionValues, setOptionValues] = React.useState<any[]>([])
  //
  // //Handlers
  // const handleChange = (event: any, field: any) => {
  //   const {
  //     target: { value: objValue },
  //   } = event
  //
  //   // setOptionValues(
  //   //   // On autofill we get a stringified value.
  //   //   typeof objValue === 'string' ? objValue.split(',') : objValue
  //   // )
  //   return objValue
  // }

  return (
    <Controller
      control={form?.control}
      name={name}
      rules={{ ...rules }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {placeholder || 'انتخاب کنید'}
          </InputLabel>
          <Select
            {...field}
            error={error}
            multiple
            // value={field.value}
            // onChange={(e, newValue) => handleChange(e, newValue)}
            renderValue={(selected: any) => (
              <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value: any) => (
                  <Chip key={value} label={value.label} sx={{ height: 18 }} />
                ))}
              </Stack>
            )}
            id={name}
            disabled={disabled}
            defaultValue={defaultValue}
            variant="outlined"
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
            {options?.map(option => (
                <MenuItem
                  key={option.value}
                  value={option as any}
                  id={option.value}
                >
                  <Checkbox checked={field.value.findIndex((v: any) => v.value === option.value) >= 0} />
                  <ListItemText primary={option.label} />
                </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}

export default UFMultiSelect
