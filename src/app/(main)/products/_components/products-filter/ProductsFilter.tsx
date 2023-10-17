import React, { FC } from "react";
import { Divider, FormControlLabel, Stack, Switch, TextField, Typography} from "@mui/material";
import SvgSearch from "~/components/icons/Search";
import Categories from "~/app/(main)/products/_components/products-filter/_components/Categories";
import Brands from "~/app/(main)/products/_components/products-filter/_components/Brands";

interface Props {}

const ProductsFilter: FC<Props> = () => {
  return (
    <Stack
      bgcolor={"background.1"}
      p={2}
      borderRadius={1}
      borderBottom={"1px solid"}
      borderColor={"grey.2"}
      gap={3}
      height={"100%"}
    >
      <TextField
        variant={"filled"}
        size={"small"}
        placeholder={"محصول مورد نظر را جستجو کنید"}
        InputProps={{
          startAdornment: (
            <SvgSearch width={24} height={24} primarycolor={"#6E6E6E"} />
          ),
        }}
        fullWidth
      />

      <Categories />

      <Divider />

      <Brands />

      <Divider />



        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label={<Typography fontWeight={500} fontSize={16}>نمایش کالا های موجود</Typography>}
          labelPlacement="start"
          sx={{justifyContent: "space-between", ml: 0, px: 2}}
        />

    </Stack>
  );
};

export default ProductsFilter;
