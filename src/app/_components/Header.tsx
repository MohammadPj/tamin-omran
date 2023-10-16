"use client";
import React, { FC } from "react";
import { Box, Button, Container, TabProps, TextField } from "@mui/material";
import Image from "next/image";
import CustomTab from "~/components/custom-mui/custom-tab/CustomTab";
import SvgExpandMore from "~/components/icons/ExpandMore";
import Logo from "~/app/_components/Logo";

interface Props {}

const Header: FC<Props> = () => {
  const tabs: TabProps[] = [
    { label: "خانه" },
    { label: "محصولات" },
    { label: "بروشور ها" },
    { label: "مقالات" },
    { label: "تماس با ما" },
    { label: "درباره ما" },
  ];

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Box bgcolor={"white"}>
      <Container maxWidth={"lg"}>
        <Box
          display={"flex"}
          py={5}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Logo />
          <Button onClick={handleClick}>ورود/ثبت نام</Button>
        </Box>

        <Box mb={4} display={"flex"} justifyContent={"space-between"}>
          <CustomTab tabs={tabs} />

          <Box display={"flex"} gap={2}>
            <TextField
              variant={"filled"}
              size={"medium"}
              placeholder={"محصول مورد نظر را جستجو کنید"}
              sx={{width: 300}}
            />
            <Button sx={{height: 40, px: 1}} variant={'text'} >
              <SvgExpandMore />
              IR
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
