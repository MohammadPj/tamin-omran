import { Menu, MenuItem, MenuItemProps, MenuProps } from "@mui/material";
import React, { FC } from "react";
import Box, { BoxProps } from "@mui/material/Box";

export interface ICustomPopperMenuItem {
  content: React.ReactNode;
  onClick?: () => void;
  menuItemProp?: MenuItemProps;
}

interface Props {
  anchor: React.ReactNode;
  items: ICustomPopperMenuItem[];
  onToggle?: (open: boolean) => void;
  boxProps?: BoxProps;
  menuProps?: Omit<MenuProps, "open">;
  menuItemProps?: MenuItemProps;
}

const CustomMenuList: FC<Props> = ({
  anchor,
  items,
  onToggle,
  menuProps,
  boxProps,
  menuItemProps,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = (e: any) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClick = (
    event: Event | React.SyntheticEvent,
    onClick?: () => void
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (onClick) {
      event.stopPropagation();
      onClick();
    }
    handleClose(event);
  };

  // return focus to the button when we transitioned from !open -> open
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
        aria-controls={open ? "composition-menu-sidebar" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        width={"fit-content"}
        {...boxProps}
      >
        {anchor}
      </Box>

      <Menu
        onClick={(e) => e.stopPropagation()}
        id="basic-menu"
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        {...menuProps}
      >
        {items.map((item, i) => (
          <MenuItem
            key={i}
            onClick={(event) => handleClick(event, item.onClick)}
            {...item.menuItemProp}
            {...menuItemProps}
          >
            {item.content}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomMenuList;
