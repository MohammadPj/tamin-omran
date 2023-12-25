import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import SvgDownload from "~/components/icons/final/Download";
import {Metadata} from "next";
import {getDictionary} from "~/i18n";
import {TLang} from "~/services/api/type";
import {http} from "~/services/core/http";
import queryString from "querystring";
import {IBrochure, IBrochureType} from "~/types/brochure";
import {IMeta} from "~/app/[lang]/(main)/articles/page";

export const metadata: Metadata = {
  title: "بروشور ها",
};

async function getBrochures({ lang }: { lang: TLang }): Promise<any> {
  // Call the fetch method and passing
  // the pokeAPI link
  const query = {
    lang,
  };
  const normalizeQuery = queryString.stringify(query);

  return await http.get(`brochure?${normalizeQuery}`);
}

async function getBrochureTypes({ lang }: { lang: TLang }): Promise<any> {
  // Call the fetch method and passing
  // the pokeAPI link
  const query = {
    lang,
  };
  const normalizeQuery = queryString.stringify(query);

  return await http.get(`brochure-type?${normalizeQuery}`);
}

const BrochuresPage = async ({ params }: any) => {
  const dictionary = getDictionary(params.lang);

  // {data: IArticle[], meta: IMeta} | undefined

  let brochureTypes: {data: IBrochureType[], meta: IMeta} | undefined = undefined
  let brochures: {data: IBrochure[], meta: IMeta} | undefined = undefined

  try {
    brochureTypes = await getBrochureTypes({
      lang: params.lang,
    });

    brochures = await getBrochures({
      lang: params.lang,
    });

  } catch (e) {
    console.log('error', e)
  }

  const renderBrochureTypes = brochureTypes?.data?.map((brochureType) => ({
    title: brochureType.title,
    brochures: brochures?.data.filter(
      (brochure) => brochure.brochureType._id === brochureType._id
    ),
  }));

  console.log('brochures', brochures)
  console.log('brochureTypes', brochureTypes)
  console.log('renderBrochureTypes', renderBrochureTypes)

  return (
    <Container
      sx={{
        mt: 7,
        mb: 20,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack gap={5} flexGrow={1} mb={10}>
        {renderBrochureTypes?.map((brochureType, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<SvgArrowDown width={24} height={24} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ background: "inherit" }}
            >
              <Typography fontWeight={700} fontSize={20}>
                {brochureType.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={4}>
                {brochureType.brochures?.map((brochure, j) => (
                  <>
                    <Divider />

                    <Box
                      key={j}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography fontSize={20} color={"text.secondary"}>
                        {brochure.title}
                      </Typography>

                      <Button
                        sx={{ display: "flex", gap: 2 }}
                        size={"small"}
                        component={'a'}
                        href={brochure.file}
                      >
                        {dictionary("common.download")}
                        <SvgDownload
                          width={18}
                          height={18}
                          primarycolor={"white"}
                        />
                      </Button>
                    </Box>
                  </>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
      {/*<Pagination count={10} variant={'outlined'} shape={'rounded'} />*/}
    </Container>
  );
};

export default BrochuresPage;
