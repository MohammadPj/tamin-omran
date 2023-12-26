import React, {FC} from "react";
import FormControl from "@mui/material/FormControl";
import {Autocomplete, InputLabel} from "@mui/material";
import {Controller, UseFormReturn} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

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
      rules={{...rules}}
      defaultValue={defaultValue}
      render={({field}) => (
        // <FormControl sx={{ border: "1px solid red", width: "100%" }}>
        <FormControl fullWidth>
          {(!field.value || field.value && field.value?.length === 0) && (
            <InputLabel id="demo-simple-select-label">
              {placeholder || "Select items"}
            </InputLabel>
          )}

          <Autocomplete
            {...field}
            // value={form.watch(name)}
            onChange={(e, newValue) => {
              field.onChange(newValue);
            }}
            limitTags={1}
            id={name}
            disabled={disabled}
            multiple
            options={options || []}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={((option, value) => {
              return option.value === value.value
            })}
            renderOption={(props, option, {selected}) => (
              <li style={{direction:"rtl"}} {...props}>
                <Checkbox sx={{mr: 2}} checked={selected}/>
                {option.label}
              </li>
            )}
            renderInput={(params) => <TextField error={error} {...params} />}
            sx={sx}
          />
        </FormControl>
      )}
    />
  );
};

export default UFAutoComplete;
