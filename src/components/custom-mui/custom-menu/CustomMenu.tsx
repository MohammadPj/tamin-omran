import {
  Menu, MenuProps,
} from "@mui/material";
import React, { FC } from "react";
import Box, {BoxProps} from "@mui/material/Box";

export interface ICustomPopperMenuItem {
  text: React.ReactNode;
  onClick?: () => void;
}

interface Props{
  anchor: React.ReactNode;
  children: React.ReactNode;
  menuProps?: Omit<MenuProps, 'open'>;
  boxProps?: BoxProps;
  onToggle?: (open: boolean) => void;
  open?: boolean
}

const CustomMenu: FC<Props> = ({ anchor, children, menuProps, boxProps, onToggle, open = true}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const _open = Boolean(anchorEl && open);
  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current!.focus();
    }

    if (onToggle) {
      onToggle(open);
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Box
        ref={anchorRef}
        id="composition-button"
        aria-controls={_open ? "composition-menu-sidebar" : undefined}
        aria-expanded={_open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        width={"fit-content"}
        {...boxProps}
      >
        {anchor}
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={_open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        {...menuProps}
      >
        {children}
      </Menu>
    </>
  );
};

export default CustomMenu;