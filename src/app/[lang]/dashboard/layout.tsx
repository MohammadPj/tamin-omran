"use client";
import React, { FC } from "react";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import CustomLink from "~/components/common/custom-link/CustomLink";
import { usePathname } from "next/navigation";
import SvgLogo from "~/components/icons/final/Logo";
import LanguageMenu from "~/app/[lang]/_components/header/components/LanguageMenu";
import Stack from "@mui/material/Stack";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  const drawerWidth = 200;
  const pathname = usePathname();

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
        <Box display={"flex"} justifyContent={"center"} py={5}>
          <SvgLogo />
        </Box>
        <List>
          {tabs.map((tab, i) => (
            <CustomLink key={i} href={tab.link}>
              <ListItemButton selected={pathname.startsWith(tab.link)}>
                {tab.title}
              </ListItemButton>
            </CustomLink>
          ))}
        </List>
      </Drawer>

      <Stack
        component={"main"}
        flexGrow={1}
        minHeight={"100vh"}
        pr={20}
        pl={10}
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

        <Box flexGrow={1} pb={4}>{children}</Box>
      </Stack>
    </Box>
  );
};

export default DashboardLayout;
