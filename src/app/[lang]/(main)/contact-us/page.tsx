import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import SvgPhone from '~/components/icons/final/Phone'
import SvgEmail from '~/components/icons/final/Email'
import SvgLocation from '~/components/icons/final/Location'
import SvgTelegram from '~/components/icons/final/Telegram'
import SvgWhatsApp from '~/components/icons/final/WhatsApp'
import {Metadata} from "next";
import {getDictionary} from "~/i18n";
import SvgInstagram from "~/components/icons/output/Instagram";
import SocialMedias from "~/app/[lang]/_components/footer/_components/SocialMedias";

export const metadata: Metadata = {
  title: 'ارتباط با ما',
}

const ContactUsPage = ({params}: any) => {

  const dictionary = getDictionary(params.lang)

  return (
    <Container sx={{ my: 15 }}>
      <Box display={'flex'} gap={4} mb={12}>
        <Image
          src={'/images/common/google-map.png'}
          alt={'google-map'}
          width={465}
          height={390}
        />

        <Stack
          justifyContent={'space-between'}
          bgcolor={'background.1'}
          width={'100%'}
          borderRadius={1}
          px={7}
          py={6}
        >
          <Box>
            <Typography fontWeight={500} fontSize={18} mb={5}>
              {dictionary("contactUs.contactTheSaleOffice")}
            </Typography>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <SvgPhone primarycolor={'#F7941D'} />
              <Typography fontWeight={400} fontSize={16} color={'primary.1'}>
                021-65611395-96
              </Typography>
            </Box>
          </Box>

          <Box mb={7}>
            <Typography fontWeight={500} fontSize={18} mb={5}>
              {dictionary("contactUs.contactTheWarehouse")}
            </Typography>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <SvgPhone primarycolor={'#F7941D'} />
              <Typography fontWeight={400} fontSize={16} color={'primary.1'}>
                09124891979
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography fontWeight={500} fontSize={18} mb={5}>
              {dictionary("contactUs.addressAndInformation")}
            </Typography>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <SvgEmail primarycolor={'#F7941D'} />
              <Typography fontWeight={400} fontSize={16} color={'primary.1'}>
                tamin.omran.qateh@gmail.com | federalengineparts@gmail.com
              </Typography>
            </Box>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <SvgLocation primarycolor={'#F7941D'} />
              <Typography fontWeight={400} fontSize={16} color={'primary.1'}>
                {dictionary("common.footer.address")}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box
        display={'flex'}
        justifyContent={'space-between'}
        py={10}
        px={5}
        bgcolor={'background.1'}
        borderRadius={1}
        borderTop={'1px solid'}
        borderColor={'secondary.main'}
      >
        <Typography fontWeight={700} fontSize={20}>
          {dictionary("contactUs.title")}
        </Typography>

        <SocialMedias />
      </Box>
    </Container>
  )
}

export default ContactUsPage
