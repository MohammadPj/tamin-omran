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
import {getDictionary, TLanguages} from "~/i18n";
import SvgSearch from "~/components/icons/final/Search";

interface HeaderProps {
  lang: TLanguages
}

const Header: FC<HeaderProps> = ({lang}) => {

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

        <Box mb={4} display={"flex"} justifyContent={"space-between"}>
          <CustomTab tabs={tabs} />

          <Box display={"flex"} gap={2} alignItems={"center"}>
            <TextField
              variant={"filled"}
              size={"medium"}
              placeholder={dictionary("common.header.search")}
              sx={{ width: 300 }}
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
