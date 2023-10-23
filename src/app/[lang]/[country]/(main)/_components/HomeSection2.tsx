import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import Image from "next/image";

const HomeSection2: FC = () => {
  const customers = [
    "/images/customers/customer (1).png",
    "/images/customers/customer (2).png",
    "/images/customers/customer (3).png",
    "/images/customers/customer (4).png",
    "/images/customers/customer (5).png",
    "/images/customers/customer (1).png",
    "/images/customers/customer (2).png",
    "/images/customers/customer (3).png",
    "/images/customers/customer (4).png",
  ];

  return (
    <Box>
      <CustomDivider
        title={"این یک متن ساختگی است که تغییر خواهد کرد"}
        mb={6}
      />

      <Typography color={"text.secondary"} mb={4}>
        انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش
        نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته
        میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید
        در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد
        حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان
        هم به صورت تغییر یافته اعمال میشود
      </Typography>

      <Box display={"flex"} flexWrap={'wrap'} justifyContent={"center"} gap={8}>
        {customers.map((customer, i) => (
          <Box
            key={i}
            width={205}
            height={90}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={'white'}
          >
            <Image
              src={customer}

              alt={"customer"}
              width={100}
              height={40}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeSection2;
