import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container, Divider,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import SvgArrowDown from '~/components/icons/ArrowDown'
import SvgDownload from '~/components/icons/Download'

const BrochuresPage = () => {
  const categories = [
    {
      title: 'Category 1',
      brochures: [
        { title: 'Brochure 1', link: 'link1' },
        { title: 'Brochure 2', link: 'link2' },
        { title: 'Brochure 3', link: 'link3' },
        { title: 'Brochure 4', link: 'link4' },
      ],
    },
    {
      title: 'Category 2',
      brochures: [
        { title: 'Brochure A', link: 'linkA' },
        { title: 'Brochure B', link: 'linkB' },
        { title: 'Brochure C', link: 'linkC' },
        { title: 'Brochure D', link: 'linkD' },
      ],
    },
    {
      title: 'Category 3',
      brochures: [
        { title: 'Brochure X', link: 'linkX' },
        { title: 'Brochure Y', link: 'linkY' },
        { title: 'Brochure Z', link: 'linkZ' },
        { title: 'Brochure W', link: 'linkW' },
      ],
    },
  ]

  return (
    <Container sx={{ mt: 7, mb: 20 }}>
      <Stack gap={5}>
        {categories.map((cat, i) => (
          <Accordion key={i} >
            <AccordionSummary
              expandIcon={<SvgArrowDown width={24} height={24} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{background: 'inherit'}}
            >
              <Typography fontWeight={700} fontSize={20}>{cat.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Stack gap={4}>
                {cat.brochures?.map((brochure, j) => (
                  <>
                    <Divider />

                    <Box
                      key={j}
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Typography fontSize={20} color={'text.secondary'}>{brochure.title}</Typography>

                      <Button sx={{ display: 'flex', gap: 2 }} size={'small'}>
                        دانلود
                        <SvgDownload
                          width={18}
                          height={18}
                          primarycolor={'white'}
                        />
                      </Button>
                    </Box>
                  </>

                ))}
              </Stack>

            </AccordionDetails>
          </Accordion>
        ))}

        <Pagination count={10} variant={'outlined'} shape={'rounded'} />
      </Stack>
    </Container>
  )
}

export default BrochuresPage
