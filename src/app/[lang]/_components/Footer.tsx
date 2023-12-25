'use client'
import React, { FC } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SvgEmail from "~/components/icons/final/Email";
import SvgPhone from "~/components/icons/final/Phone";
import SvgLocation from "~/components/icons/final/Location";
import SvgTelegram from "~/components/icons/final/Telegram";
import SvgWhatsApp from "~/components/icons/final/WhatsApp";
import SvgLogo from "~/components/icons/final/Logo";
import {getDictionary, TLanguages} from "~/i18n";
import {useGetCategories} from "~/services/api/hooks";

interface Props {
  lang: TLanguages
}

interface IContact {
  id: string;
  icon: React.ReactNode;
  text: string;
}

interface ILink {
  id: string;
  text: string;
  link: string;
}

const Footer: FC<Props> = ({lang}) => {

  const dictionary = getDictionary(lang)
  const {data: categories} = useGetCategories({lang, limit: 3})

  const contactInfo: IContact[] = [
    {
      id: "phone",
      icon: <SvgPhone width={24} height={24} primarycolor={"#F7941D"} />,
      text: "021-1241454 | 021-1235148",
    },
    {
      id: "email",
      icon: <SvgEmail width={24} height={24} primarycolor={"#F7941D"} />,
      text: "taminghate@gmail.com",
    },
    {
      id: "address",
      icon: <SvgLocation width={24} height={24} primarycolor={"#F7941D"} />,
      text: dictionary("common.footer.address"),
    },
  ];

  // const categories: ICategory[] = [
  //   {
  //     id: "1",
  //     text: dictionary("common.category"),
  //   },
  //   {
  //     id: "2",
  //     text: dictionary("common.category"),
  //   },
  //   {
  //     id: "3",
  //     text: dictionary("common.category"),
  //   },
  // ];

  const links: ILink[] = [
    {
      id: "1",
      text: dictionary("common.articlesAndNews"),
      link: "/article-and-news",
    },
    {
      id: "2",
      text: dictionary("common.aboutUs"),
      link: "about-us",
    },
    {
      id: "3",
      text: dictionary("common.contactUs"),
      link: "contact-us",
    },
  ];

  const socials = [
    {
      id: "1",
      icon: <SvgTelegram primarycolor={"white"} />,
      link: "",
    },
    {
      id: "2",
      icon: <SvgWhatsApp primarycolor={"white"} />,
      link: "",
    },
  ];

  return (
    <Stack bgcolor={"white"}>
      <Divider color={"#262262"} sx={{ borderWidth: 1.5 }} />

      <Container>
        <Stack gap={12} py={10} overflow={'hidden'}>
          <Grid container columnSpacing={10} rowSpacing={12}>
            <Grid item xs={12} sm={6} lg={4}>
              <SvgLogo />

              <Typography fontWeight={400} fontSize={14}>
                {dictionary("common.footer.description")}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Typography fontWeight={500} fontSize={20} mb={4}>
                {dictionary("common.footer.contactInformation")}
              </Typography>

              <Stack gap={2}>
                {contactInfo.map((contact) => (
                  <Box
                    key={contact.id}
                    display={"flex"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Box display={"flex"} alignItems={"start"}>
                      {contact.icon}
                    </Box>
                    <Typography color={"text.secondary"}>
                      {contact.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={6} sm={6} lg={2}>
              <Typography fontWeight={500} fontSize={20} mb={4}>
                {dictionary("common.products")}
              </Typography>

              {categories?.data?.map((category) => (
                <Typography key={category._id} mb={2} sx={{ cursor: "pointer" }}>
                  {category.title}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={6} sm={6} lg={2}>
              <Typography fontWeight={500} fontSize={20} mb={4}>
                {dictionary("common.footer.usefulLinks")}
              </Typography>

              {links.map((link) => (
                <Typography key={link.id} mb={2} sx={{ cursor: "pointer" }}>
                  {link.text}
                </Typography>
              ))}
            </Grid>
          </Grid>

          <Divider />

          <Box display={"flex"} flexDirection={{xs: 'column', sm: 'row'}} gap={4} justifyContent={"space-between"}>
            <Typography fontWeight={700} fontSize={{xs: 14, sm: 20}}>
              {dictionary("common.footer.title")}
            </Typography>

            <Box display={"flex"} gap={5} sx={{cursor: 'pointer'}} alignSelf={'end'}>
              {socials.map((s) => (
                <Box
                  key={s.id}
                  p={2}
                  borderRadius={2}
                  display={"flex"}
                  bgcolor={'#262262'}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>
          </Box>

          <Divider />

          <Typography
            fontWeight={500}
            fontSize={18}
            color={"text.secondary"}
            sx={{ alignSelf: "center" }}
          >
            Copyright.
            <Typography
              component={"span"}
              color={"secondary"}
              fontWeight={500}
              fontSize={{xs: 14, sm: 18}}
            >
              TaminOmranQateh
            </Typography>
            .2023
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
