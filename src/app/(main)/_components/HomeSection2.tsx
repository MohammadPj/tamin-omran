import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";

const HomeSection2: FC = () => {

  const customers = []

  return (
    <Box>
      <CustomDivider title={'این یک متن ساختگی است که تغییر خواهد کرد'} mb={6} />

      <Typography color={'text.secondary'}>
        انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود
      </Typography>

      <Box display={'flex'} justifyContent={'center'} gap={4}>

      </Box>
    </Box>
  );
};

export default HomeSection2;
