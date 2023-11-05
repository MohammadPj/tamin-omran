import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";

const Categories: FC = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} pl={2} sx={{cursor: 'pointer'}}>
      <Typography fontWeight={500} fontSize={16}>دسته بندی</Typography>
      <SvgArrowDown width={24} height={24}/>
    </Box>
  );
};

export default Categories;
