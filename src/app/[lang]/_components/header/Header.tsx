"use client";
import React, { FC } from "react";
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CustomTab, { ITab } from "~/components/custom-mui/custom-tab/CustomTab";
import SvgLogo from "~/components/icons/final/Logo";
import LanguageMenu from "~/app/[lang]/_components/header/components/LanguageMenu";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const tabs: ITab[] = [
    { label: "خانه", href: "/" },
    { label: "محصولات", href: "/products" },
    { label: "بروشور ها", href: "/brochures" },
    { label: "مقالات", href: "/articles" },
    { label: "تماس با ما", href: "/contact-us" },
    { label: "درباره ما", href: "/contact-us" },
  ];

  return (
    <Box bgcolor={"white"}>
      <Container maxWidth={"lg"}>
        <Box
          display={"flex"}
          py={5}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <SvgLogo />
          <Button>ورود/ثبت نام</Button>
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

            <LanguageMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
