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
import { getDictionary, TLanguages } from "~/i18n";
import SvgSearch from "~/components/icons/final/Search";
import SvgMenu from "~/components/icons/final/Menu";
import SideBar from "~/app/[lang]/_components/sidebar/SideBar";

interface HeaderProps {
  lang: TLanguages;
}

const Header: FC<HeaderProps> = ({ lang }) => {
  const dictionary = getDictionary();

  const tabs: ITab[] = [
    { label: dictionary("common.home"), href: "/" },
    { label: dictionary("common.products"), href: "/products" },
    { label: dictionary("common.brochures"), href: "/brochures" },
    { label: dictionary("common.articles"), href: "/articles" },
    { label: dictionary("common.contactUs"), href: "/contact-us" },
    { label: dictionary("common.aboutUs"), href: "/contact-us" },
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
          <Button>{dictionary("common.header.login")}</Button>
        </Box>

        <Box
          mb={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <CustomTab
            tabs={tabs}
            tabsProps={{ sx: { display: { xs: "none", sm: "flex" } } }}
          />

          <Box
            display={"flex"}
            flexGrow={{ xs: 1, md: "unset" }}
            justifyContent={"space-between"}
            gap={2}
            alignItems={"center"}
          >
            <SideBar />

            <TextField
              variant={"filled"}
              size={"medium"}
              placeholder={dictionary("common.header.search")}
              sx={{ width: {xs: '100%', sm: 300} }}
              InputProps={{
                startAdornment: (
                  <SvgSearch width={24} height={24} primarycolor={"#6E6E6E"} />
                ),
              }}
            />

            <LanguageMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
