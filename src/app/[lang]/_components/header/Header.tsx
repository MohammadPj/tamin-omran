"use client";
import React, { FC, useState } from "react";
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
import { useCommon } from "~/store/common/commonSlice";
import {getDeviceType, handleLogout} from "~/helpers/methods";
import { usePathname } from "next/navigation";
import LoginAndRegisterModal from "~/app/[lang]/_components/header/components/LoginAndRegisterModal";
import { useUser } from "~/store/user/userSlice";
import Link from "next/link";
import ProfileButton from "~/app/[lang]/_components/header/components/ProfileButton";

interface HeaderProps {
  lang: TLanguages;
}

const Header: FC<HeaderProps> = ({ lang }) => {
  const dictionary = getDictionary();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { userInfo, token } = useUser();

  const tabs: ITab[] = [
    { label: dictionary("common.home"), href: "/" },
    { label: dictionary("common.products"), href: "/products" },
    { label: dictionary("common.brochures"), href: "/brochures" },
    { label: dictionary("common.articles"), href: "/articles" },
    { label: dictionary("common.contactUs"), href: "/contact-us" },
    // { label: dictionary("common.aboutUs"), href: "/contact-us" },
  ];

  const deviceType = getDeviceType();
  const pathname = usePathname();

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

          <Box display={"flex"} gap={4}>
            {userInfo?.isAdmin && (
              <Link href={"/dashboard" as any}>
                <Button>
                  {dictionary("common.loginAndRegister.adminPanel")}
                </Button>
              </Link>
            )}

            {token ? (
              // <Button onClick={handleLogout} color={'error'}>
              //   {dictionary("common.header.logout")}
              // </Button>

              <ProfileButton />
            ) : (
              <Button onClick={() => setIsLoginModalOpen(true)}>
                {dictionary("common.header.loginAndRegister")}
              </Button>
            )}
          </Box>
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

            {pathname === "/" && (
              <TextField
                variant={"filled"}
                size={deviceType === "Mobile" ? "small" : "medium"}
                placeholder={dictionary("common.header.search")}
                sx={{ width: { xs: "100%", sm: 300 } }}
                InputProps={{
                  startAdornment: (
                    <SvgSearch
                      width={24}
                      height={24}
                      primarycolor={"#6E6E6E"}
                    />
                  ),
                }}
              />
            )}

            <LanguageMenu />
          </Box>
        </Box>
      </Container>

      <LoginAndRegisterModal
        isOpen={isLoginModalOpen}
        lang={lang}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </Box>
  );
};

export default Header;
