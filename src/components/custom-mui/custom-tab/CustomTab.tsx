"use client";
import React, { FC, useState } from "react";

import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab, { TabProps } from "@mui/material/Tab";
import { usePathname } from "next/navigation";
import CustomLink from "~/components/common/custom-link/CustomLink";
import { getUrlWithoutLang } from "~/utils/methods";

export interface ITab {
  label: string;
  href?: string;
}

interface Props {
  tabs: ITab[];
  onChange?: (value: number) => void;
  tabsProps?: TabsProps;
  tabProps?: TabProps;
}

const CustomTab: FC<Props> = ({ onChange, tabs, tabsProps, tabProps }) => {
  const pathname = usePathname();

  const [value, setValue] = useState(
    tabs.findIndex((tab) => tab?.href === getUrlWithoutLang(pathname))
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Tabs
      value={value > -1 ? value : 0}
      onChange={handleChange}
      {...tabsProps}
      indicatorColor="secondary"
      textColor={"primary"}
    >
      {tabs.map((tab, i) =>
        tab.href ? (
          <Tab
            component={CustomLink}
            href={tab.href || ""}
            label={tab.label}
            sx={{ fontWeight: value === i ? 700 : 400 }}
            key={i}
            value={i}
            {...tabProps}
          />
        ) : (
          <Tab
            label={tab.label}
            sx={{ fontWeight: value === i ? 700 : 400 }}
            key={i}
            value={i}
            {...tabProps}
          />
        )
      )}
    </Tabs>
  );
};

export default CustomTab;
