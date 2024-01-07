import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import Image from "next/image";
import { getDictionary } from "~/i18n";
import CustomDivider2 from "~/components/custom-mui/custom-divider/CustomDivider2";
import { TLang } from "~/services/api/type";

interface HomeSection2Props {
  lang: TLang;
}

const HomeSection2: FC<HomeSection2Props> = ({ lang }) => {
  const customers = [
    { type: "image", value: "/images/customers/dfm-logo.png" },
    { type: "image", value: "/images/customers/customer (2).png" },
    { type: "image", value: "/images/customers/customer (3).png" },
    { type: "image", value: "/images/customers/customer (4).png" },
    { type: "image", value: "/images/customers/customer (5).png" },
    { type: "image", value: "/images/customers/logo-fuji.jpg" },
    { type: "text", value: "FEDERAL GASKET" },
    { type: "text", value: "NIPPON GASKET" },
    { type: "image", value: "/images/customers/fp-diesel-logo.png" },
    { type: "image", value: "/images/customers/tp-bolivia-logo.png" },
    { type: "image", value: "/images/customers/rik-logo.png" },
    { type: "image", value: "/images/customers/dcec-logo.webp" },
    { type: "image", value: "/images/customers/dft-logo.jpg" },
    { type: "image", value: "/images/customers/ndc-logo.jpg" },
  ];

  const dictionary = getDictionary(lang);

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
            px={6}
            py={4}
            bgcolor={"white"}
            alignSelf={i % 2 === 0 ? "end" : "start"}
            borderRadius={1}
            border={"1px solid"}
            borderColor={"grey.3"}
          >
            {customer.type === "image" ? (
              <Box width={'100%'} height={'100%'} position={"relative"}>
                <Image src={customer.value} alt={"customer"} fill />
              </Box>
            ) : (
              <Typography
                fontWeight={700}
                fontSize={32}
                color={"#2d4293"}
                fontFamily={"fantasy"}
                lineHeight={"normal"}
                textAlign={"center"}
              >
                {customer.value}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeSection2;
