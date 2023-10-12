"use client";
import React, { FC } from "react";

import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab, {TabProps} from "@mui/material/Tab";

interface Props {
  tabs: TabProps[];
  onChange?: (value: number) => void;
  tabsProps?: TabsProps;
}

const CustomTab: FC<Props> = ({ onChange, tabs, tabsProps }) => {


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   if (tabs[0].hasOwnProperty("href")) {
  //     let index;
  //     // if (tabs[0].href === "/") {
  //     // eslint-disable-next-line prefer-const
  //     index = tabs.findIndex((tab) => location === tab.href);
  //     // } else {
  //     //   index = tabs.findIndex((tab) => location.pathname.includes(tab.href));
  //     // }
  //
  //     if (value !== index) {
  //       setValue(index);
  //     }
  //   }
  // }, [tabs]);

  return (
    <Tabs
      value={value > -1 ? value : 0}
      onChange={handleChange}
      {...tabsProps}
      indicatorColor="secondary"
      textColor={"primary"}
    >
      {tabs.map((tab, i) => (
        <Tab sx={{fontWeight: value === i ? 700 : 400}} key={i} value={i} {...tab}/>
      ))}
    </Tabs>
  );
};

export default CustomTab;
