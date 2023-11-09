import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import Image from "next/image";
import { getDictionary } from "~/i18n";
import CustomDivider2 from "~/components/custom-mui/custom-divider/CustomDivider2";

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

  const dictionary = getDictionary();

  return (
    <Box>
      <CustomDivider2
        title={dictionary("home.homeSection2.title")}
        boxProps={{ mb: 6 }}
      />

      <Typography color={"text.secondary"} mb={4} textAlign={"justify"}>
        {dictionary("home.homeSection2.description")}
      </Typography>

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={8}
      >
        {customers.map((customer, i) => (
          <Box
            key={i}
            width={205}
            height={90}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"white"}
            alignSelf={i % 2 === 0 ? "end" : "start"}
            borderRadius={1}
            border={'1px solid'}
            borderColor={'grey.3'}
          >
            <Image src={customer} alt={"customer"} width={100} height={40} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeSection2;
