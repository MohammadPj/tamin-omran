'use client'
import React, { FC } from 'react'
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  TextField, Typography,
} from '@mui/material'
import CustomTab, { ITab } from '~/components/custom-mui/custom-tab/CustomTab'
import SvgExpandMore from '~/components/icons/final/ExpandMore'
import SvgLogo from '~/components/icons/final/Logo'
import Image from 'next/image'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const tabs: ITab[] = [
    { label: 'خانه', href: '/' },
    { label: 'محصولات', href: '/products' },
    { label: 'بروشور ها', href: '/brochures' },
    { label: 'مقالات', href: '/articles' },
    { label: 'تماس با ما', href: '/contact-us' },
    { label: 'درباره ما', href: '/contact-us' },
  ]

  const handleClick = () => {
    console.log('clicked')
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl as any)

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSelectLanguage = (value: any) => {

  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const languages = [
    {title: 'ایران', icon: '/images/common/iran-flag.png', abbreviation: 'IR'},
    {title: 'English', icon: '/images/common/iran-flag.png', abbreviation: 'EN'},
  ]

  return (
    <Box bgcolor={'white'}>
      <Container maxWidth={'lg'}>
        <Box
          display={'flex'}
          py={5}
          width={'100%'}
          justifyContent={'space-between'}
        >
          <SvgLogo />
          <Button >ورود/ثبت نام</Button>
        </Box>

        <Box mb={4} display={'flex'} justifyContent={'space-between'}>
          <CustomTab tabs={tabs} />

          <Box display={'flex'} gap={2} alignItems={'center'}>
            <TextField
              variant={'filled'}
              size={'medium'}
              placeholder={'محصول مورد نظر را جستجو کنید'}
              sx={{ width: 300 }}
            />

            <Button
              sx={{ px: 2}}
              variant={'text'}
              onClick={handleClickMenu}
            >
              <SvgExpandMore />
              IR
              <Image
                src={'/images/common/iran-flag.png'}
                width={32}
                height={32}
                style={{marginRight: 8}}
                alt={'iran-flag'}
              />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {languages.map(lang => (
                <MenuItem key={lang.title} onClick={handleSelectLanguage}>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} gap={4}>
                    <Typography>{lang.title}</Typography>

                    <Image src={lang.icon} alt={'flag'} width={32} height={32}/>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
