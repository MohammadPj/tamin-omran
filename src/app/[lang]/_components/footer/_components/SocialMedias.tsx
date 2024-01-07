import React, {FC} from 'react';
import SvgInstagram from "~/components/icons/output/Instagram";
import SvgWhatsApp from "~/components/icons/final/WhatsApp";
import {Box} from "@mui/material";
import Link from "next/link";

interface SocialMediasProps {}

const SocialMedias: FC<SocialMediasProps> = () => {

  const socials = [

    {
      id: "2",
      icon: <SvgInstagram primarycolor={"white"} />,
      link: "https://www.instagram.com/tamin.cummins",
    },
    {
      id: "1",
      icon: <SvgWhatsApp primarycolor={"white"} />,
      link: "https://api.whatsapp.com/send?phone=09124891979",
    },
  ];

  return (
    <Box display={"flex"} gap={5} sx={{cursor: 'pointer'}} alignSelf={'end'}>
      {socials.map((s, i) => (
        <Link key={i} href={s.link as any} target={'_blank'}>
        <Box
          key={s.id}
          p={2}
          borderRadius={2}
          display={"flex"}
          bgcolor={'#262262'}
        >
          {s.icon}
        </Box>
        </Link>
      ))}
    </Box>
  );
};

export default SocialMedias;

