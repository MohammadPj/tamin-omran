import React, {FC} from 'react';
import {Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useQueryObject} from "~/hooks/useQueryObject";
import {GridProps} from "@mui/material/Grid";

interface InputListWithQueryProps {
  inputList: IUseFormInput[]
  gridContainerProps?: GridProps
  gridItemProps?: GridProps
}

const InputListWithQuery: FC<InputListWithQueryProps> = ({inputList, gridItemProps, gridContainerProps}) => {
  const {query, debounceAddTextQuery} = useQueryObject()

  return (
    <Grid container spacing={2} {...gridContainerProps}>
      {inputList.map(input => (
        <Grid key={input.name} item {...gridItemProps}>
          {input.type === "select" ? (
            <FormControl sx={{ width: 200 }}>
              <InputLabel id="demo-simple-select-label">
                {input.placeholder}
              </InputLabel>
              <Select
                variant={"filled"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                multiple
                value={query?.[input.name] || []}
                onChange={(e) =>
                  debounceAddTextQuery({
                    queryName: input.multiLang ? "multi lang" : input.name,
                    value: e?.target?.value as string,
                  })
                }
              >
                {input?.options?.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <TextField
              key={input.name}
              variant={"filled"}
              placeholder={input.placeholder}
              defaultValue={query?.[input.name]}
              onChange={(e) =>
                debounceAddTextQuery({
                  queryName: input.multiLang ? input.name : input.name,
                  value: e.target.value,
                })
              }
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default InputListWithQuery;
