"use client";
import React, {FC, useEffect} from "react";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import CustomLink from "~/components/common/custom-link/CustomLink";
import {usePathname, useRouter} from "next/navigation";
import SvgLogo from "~/components/icons/final/Logo";
import LanguageMenu from "~/app/[lang]/_components/header/components/LanguageMenu";
import Stack from "@mui/material/Stack";
import {handleLogout} from "~/helpers/methods";
import {useUser} from "~/store/user/userSlice";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  const drawerWidth = 200;
  const pathname = usePathname();
  const router = useRouter()
  const {userInfo} = useUser()

  const handleNavigateWebsite = () => {
    router.push("/" as any)
  }

  useEffect(() => {
    console.log('run')
    if(!userInfo?.isAdmin) {
      handleNavigateWebsite()
    }
  })

  const tabs = [
    {
      title: "تعریف محصول",
      link: "/dashboard/product",
    },
    {
      title: "تعریف بروشور",
      link: "/dashboard/brochure",
    },
    {
      title: "تعریف مقاله",
      link: "/dashboard/article",
    },
    {
      title: "کاربران",
      link: "/dashboard/users",
    },
  ];



  return (
    <Box display={"flex"}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack height={"100%"}>
          <Box display={"flex"} justifyContent={"center"} py={5}>
            <SvgLogo />
          </Box>

          <List>
            <Stack>
              {tabs.map((tab, i) => (
                <CustomLink key={i} href={tab.link}>
                  <ListItemButton selected={pathname.startsWith(tab.link)}>
                    {tab.title}
                  </ListItemButton>
                </CustomLink>
              ))}
            </Stack>
          </List>

          <Box flexGrow={1} />

          <List>
            <ListItemButton onClick={handleNavigateWebsite}>
              <Typography fontWeight={500}>وب سایت</Typography>
            </ListItemButton>

            <ListItemButton onClick={handleLogout}>
              <Typography fontWeight={500} color={"red"}>خروج</Typography>
            </ListItemButton>
          </List>
        </Stack>
      </Drawer>

      <Stack
        component={"main"}
        flexGrow={1}
        width={0}
        minHeight={"100vh"}
        pr={20}
        pl={10}
        bgcolor={'#F0F0F0'}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          py={3}
        >
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Avatar />
            <Typography color={"text.secondary"}>ادمین شماره یک</Typography>
          </Box>

          <LanguageMenu />
        </Box>

        <Box flexGrow={1} pb={4}>
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardLayout;
