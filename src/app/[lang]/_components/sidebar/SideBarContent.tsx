import React, { FC, useState } from "react";
import { Box, List, ListItem, ListItemButton } from "@mui/material";
import SvgLogo from "~/components/icons/final/Logo";
import SvgClose from "~/components/icons/final/Close";
import { getUrlWithoutLang } from "~/utils/methods";
import { usePathname } from "next/navigation";
import { getDictionary } from "~/i18n";
import { ITab } from "~/components/custom-mui/custom-tab/CustomTab";
import CustomLink from "~/components/common/custom-link/CustomLink";

interface Props {
  onClose: () => void;
}

const SideBarContent: FC<Props> = ({ onClose }) => {
  const pathname = usePathname();
  const dictionary = getDictionary();

  const tabs: ITab[] = [
    { label: dictionary("common.home"), href: "/" },
    { label: dictionary("common.products"), href: "/products" },
    { label: dictionary("common.brochures"), href: "/brochures" },
    { label: dictionary("common.articles"), href: "/articles" },
    { label: dictionary("common.contactUs"), href: "/contact-us" },
    { label: dictionary("common.aboutUs"), href: "/contact-us" },
  ];

  const [selectedTab, setSelectedTab] = useState(
    tabs.findIndex((tab) => tab?.href === getUrlWithoutLang(pathname))
  );

  return (
    <Box minWidth={200} dir={"rtl"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={6}
        px={4}
      >
        <SvgLogo width={60} height={30} />
        <SvgClose width={24} onClick={onClose} style={{ cursor: "pointer" }} />
      </Box>

      <List>
        {tabs.map((tab, i) => (
          <ListItemButton
            key={i}
            selected={i === selectedTab}
            onClick={() => setSelectedTab(i)}
            sx={{
              borderBottom: i === selectedTab ? "1px solid" : "none",
              borderColor: "secondary.main",
            }}
          >
            <CustomLink href={tab.href as any}>{tab.label}</CustomLink>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SideBarContent;
