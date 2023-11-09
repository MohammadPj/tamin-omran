'use client'
import React, { FC, useState } from "react";
import SvgMenu from "~/components/icons/final/Menu";
import { Box, SwipeableDrawer } from "@mui/material";
import SideBarContent from "~/app/[lang]/_components/sidebar/SideBarContent";
import {useCommon} from "~/store/common/commonSlice";

const SideBar: FC = () => {
  const [open, setOpen] = useState(false);
  const {isRtl} = useCommon()

  return (
    <Box >
      <Box display={{ xs: "flex", sm: "none" }} sx={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        <SvgMenu />
      </Box>

      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <SideBarContent onClose={() => setOpen(false)} />
      </SwipeableDrawer>
    </Box>
  );
};

export default SideBar;
