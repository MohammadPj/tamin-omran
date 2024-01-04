import React, {FC} from 'react';
import SvgSearch from "~/components/icons/final/Search";
import {TextField} from "@mui/material";
import {getDictionary} from "~/i18n";
import {useQueryObject} from "~/hooks/useQueryObject";

interface ProductTitleProps {}

const ProductTitle: FC<ProductTitleProps> = () => {
  const dictionary = getDictionary();

  const {debounceAddTextQuery, query} = useQueryObject()

  return (
    <TextField
      variant={"filled"}
      size={"small"}
      placeholder={dictionary("common.header.search")}
      InputProps={{
        startAdornment: (
          <SvgSearch width={24} height={24} primarycolor={"#6E6E6E"} />
        ),
      }}
      defaultValue={query?.title}
      onChange={(e) => debounceAddTextQuery({queryName: 'title', value: e.target.value})}
      fullWidth
    />
  );
};

export default ProductTitle;
