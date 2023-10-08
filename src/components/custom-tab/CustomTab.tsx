"use client"
import React, { FC, useEffect } from "react";

import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useRouter} from "next/navigation";

interface LinkTabProps {
  label?: string;
  href?: string;
  component?: React.ElementType;
  onClick?: () => void;
}

function LinkTab({
  label,
  href,
  onClick,
  component = "div",
  ...rest
}: LinkTabProps) {
  return (
    <Tab
      sx={{ textTransform: "unset" }}
      component={component}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        if (onClick) {
          onClick();
        }
      }}
      label={label}
      href={href}
      {...rest}
    />
  );
}
export type CustomTabsProps = {
  label: string;
  onClick?: () => void;
  href?: string;
}[];

interface Props {
  tabs: CustomTabsProps;
  onChange?: (value: number) => void;
  tabsProps?: TabsProps;
}

const CustomTab: FC<Props> = ({ onChange, tabs, tabsProps }) => {
  const router = useRouter()
  const location = router.pathname

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }

    if (tabs[newValue]?.href) {
      // navigate(tabs[newValue]?.href || "#");
    }
  };

  useEffect(() => {
    if (tabs[0].hasOwnProperty("href")) {
      let index;
      // if (tabs[0].href === "/") {
      // eslint-disable-next-line prefer-const
      index = tabs.findIndex((tab) => location === tab.href);
      // } else {
      //   index = tabs.findIndex((tab) => location.pathname.includes(tab.href));
      // }

      if (value !== index) {
        setValue(index);
      }
    }
  }, [tabs]);

  return (
    <Tabs value={value > -1 ? value : 0} onChange={handleChange} {...tabsProps}>
      {tabs.map((tab, i) => (
        <LinkTab key={i} label={tab.label} onClick={tab?.onClick} />
      ))}
    </Tabs>
  );
};

export default CustomTab;
