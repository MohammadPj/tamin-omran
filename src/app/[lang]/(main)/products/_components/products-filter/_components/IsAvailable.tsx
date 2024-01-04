import React, { FC } from "react";
import { FormControlLabel, Switch, Typography } from "@mui/material";
import { getDictionary } from "~/i18n";
import {useQueryObject} from "~/hooks/useQueryObject";

interface IsAvailableProps {}

const IsAvailable: FC<IsAvailableProps> = () => {
  const dictionary = getDictionary();
  const {query, setQuery} = useQueryObject()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.target.checked)
     const checked = e.target.checked

    const newQuery = {...query}

    if(newQuery.isAvailable) {
      delete newQuery.isAvailable
    } else {
      newQuery.isAvailable = 'true'
    }
      setQuery(newQuery)
  }

  return (
    <FormControlLabel
      value="start"
      control={<Switch checked={!!query?.isAvailable} onChange={e => handleChange(e)} color="primary" />}
      label={
        <Typography fontWeight={500} fontSize={16}>
          {dictionary("products.showAvailableProducts")}
        </Typography>
      }
      labelPlacement="start"
      sx={{ justifyContent: "space-between", ml: 0, px: 2 }}
    />
  );
};

export default IsAvailable;
