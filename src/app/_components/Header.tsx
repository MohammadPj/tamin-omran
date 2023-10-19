"use client";
import React, { FC } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import CustomTab, {ITab} from "~/components/custom-mui/custom-tab/CustomTab";
import SvgExpandMore from "~/components/icons/ExpandMore";
import Logo from "~/app/_components/Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const tabs: ITab[] = [
    { label: "خانه", href: '/' },
    { label: "محصولات", href: '/products' },
    { label: "بروشور ها", href: '/brochures' },
    { label: "مقالات", href: '/articles' },
    { label: "تماس با ما", href: '/contact-us' },
    { label: "درباره ما", href: '/about-us' },
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

          <Box display={"flex"} gap={2} alignItems={"center"}>
            <TextField
              variant={"filled"}
              size={"medium"}
              placeholder={"محصول مورد نظر را جستجو کنید"}
              sx={{ width: 300 }}
            />
            <Button sx={{ px: 1 }} variant={"text"}>
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
