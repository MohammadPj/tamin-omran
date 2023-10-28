'use client'
import React, { FC } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import SvgExpandMore from "~/components/icons/final/ExpandMore";
import Image from "next/image";
import { store } from "~/store/store";
import {usePathname, useRouter} from "next/navigation";

interface ILanguages {
  title: string;
  icon: string;
  abbreviation: string;
  value: string;
}

const LanguageMenu: FC = () => {
  const lang = store.getState().common.lang;
  const pathname = usePathname()
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl as any);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectLanguage = (language: ILanguages) => {
    if(language.value === lang) return

    const pathnameLocale = pathname.split("/")[1]

    console.log('pathname', pathname.split("/")[1])
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const languages: ILanguages[] = [
    {
      title: "ایران",
      icon: "/images/common/iran-flag.png",
      abbreviation: "IR",
      value: "fa",
    },
    {
      title: "English",
      icon: "/images/common/en-flag.svg",
      abbreviation: "EN",
      value: "en",
    },
  ];

  const selectedLang = languages.find((l) => l?.value === lang);

  return (
    <Box>
      <Button sx={{ px: 2 }} variant={"text"} onClick={handleClickMenu}>
        <SvgExpandMore />
        {selectedLang?.abbreviation}

        <Image
          src={selectedLang?.icon!}
          width={32}
          height={32}
          style={{ marginRight: 8 }}
          alt={"iran-flag"}
        />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.title} onClick={() => handleSelectLanguage(lang)}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              gap={4}
            >
              <Typography>{lang.title}</Typography>

              <Image src={lang.icon} alt={"flag"} width={32} height={32} />
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageMenu;
