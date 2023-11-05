import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import {getDictionary} from "~/i18n";

interface Props {}

const Brands: FC<Props> = () => {
  const dictionary = getDictionary()

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pl={2} sx={{cursor: 'pointer'}}>
      <Typography fontWeight={500} fontSize={16}>{dictionary("common.brand")}</Typography>
      <SvgArrowDown width={24} height={24}/>
    </Box>
  );
};

export default Brands;
