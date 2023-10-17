import React, { FC } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "~/app/_components/Logo";
import SvgEmail from "~/components/icons/Email";
import SvgPhone from "~/components/icons/Phone";
import SvgLocation from "~/components/icons/Location";
import SvgTelegram from "~/components/icons/Telegram";
import SvgWhatsApp from "~/components/icons/WhatsApp";

interface Props {}

interface IContact {
  id: string;
  icon: React.ReactNode;
  text: string;
}

interface ICategory {
  id: string;
  text: string;
}

interface ILink {
  id: string;
  text: string;
  link: string;
}

const Footer: FC<Props> = () => {
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
      text: "تهران، بلوار نلسون ماندلا (جردن)، خیابان شهید سلطانی (سایه)، شماره 8",
    },
  ];

  const categories: ICategory[] = [
    {
      id: "1",
      text: "دسته بندی",
    },
    {
      id: "2",
      text: "دسته بندی",
    },
    {
      id: "3",
      text: "دسته بندی",
    },
  ];

  const links: ILink[] = [
    {
      id: "1",
      text: "اخبار و مقالات",
      link: "/article-and-news",
    },
    {
      id: "2",
      text: "درباره ما",
      link: "about-us",
    },
    {
      id: "3",
      text: "تماس با ما",
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
        <Stack gap={12} py={10}>
          <Grid container columnSpacing={10}>
            <Grid item xs={12} sm={6} lg={4}>
              <Logo />

              <Typography fontWeight={400} fontSize={14}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Typography fontWeight={500} fontSize={20} mb={4}>
                اطلاعات تماس
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

            <Grid item xs={12} sm={6} lg={2}>
              <Typography fontWeight={500} fontSize={20} mb={4}>
                محصولات
              </Typography>

              {categories.map((category) => (
                <Typography key={category.id} mb={2} sx={{ cursor: "pointer" }}>
                  {category.text}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} lg={2}>
              <Typography fontWeight={500} fontSize={20} mb={4}>
                لینک های مفید
              </Typography>

              {links.map((link) => (
                <Typography key={link.id} mb={2} sx={{ cursor: "pointer" }}>
                  {link.text}
                </Typography>
              ))}
            </Grid>
          </Grid>

          <Divider />

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={700} fontSize={20}>
              برای دریافت آخرین اخبار و مقالات مفید ما را درشبکه های اجتماعی
              دنبال کنید
            </Typography>

            <Box display={"flex"} gap={5} sx={{cursor: 'pointer'}}>
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
              fontSize={18}
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
