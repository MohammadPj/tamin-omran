"use client";
import React, { FC } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import SvgExpandMore from "~/components/icons/final/ExpandMore";
import Image from "next/image";
import { store } from "~/store/store";
import { usePathname, useRouter } from "next/navigation";
import { defaultLang } from "~/i18n";

interface ILanguages {
  title: string;
  icon: string;
  abbreviation: string;
  value: string;
}

const LanguageMenu: FC = () => {
  const lang = store.getState().common.lang;
  const pathname = usePathname();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl as any);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectLanguage = (language: ILanguages) => {
    if (language.value === lang) return;

    const splittedPathname = pathname.split("/");

    if (lang === defaultLang) {
      splittedPathname.splice(1, 0, language.value).join("/");
    } else {
      splittedPathname.splice(1, 1, language.value).join("/");
    }

    router.push(splittedPathname.join("/") as any);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuLanguages: ILanguages[] = [
    {
      title: "فارسی",
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

  const selectedLang = menuLanguages.find((l) => l?.value === lang);

  return (
    <Box>
      <Button sx={{ px: 2, gap: 2 }} variant={"text"} onClick={handleClickMenu}>
        <SvgExpandMore />
        {selectedLang?.abbreviation}

        <Box display={{ xs: "none", sm: "flex" }}>
          <Image
            src={selectedLang?.icon!}
            width={32}
            height={32}
            alt={"iran-flag"}
          />
        </Box>
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
        {menuLanguages.map((lang) => (
          <MenuItem key={lang.title} onClick={() => handleSelectLanguage(lang)}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              gap={4}
            >
              <Typography>{lang.title}</Typography>

              <Box display={{ xs: "none", sm: "flex" }}>
                <Image src={lang.icon} alt={"flag"} width={32} height={32} />
              </Box>

            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageMenu;
