import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import SvgDownload from "~/components/icons/final/Download";
import { Metadata } from "next";
import { getDictionary } from "~/i18n";
import { useGetBrochures, useGetBrochureTypes } from "~/services/api/hooks";
import { TLang } from "~/services/api/type";
import { baseURL } from "~/services/core/http";
import queryString from "querystring";
import axios from "axios";
import { IBrochure, IBrochureType } from "~/types/brochure";
import { handleDownload } from "~/helpers/methods";

export const metadata: Metadata = {
  title: "بروشور ها",
};

async function getBrochures({ lang }: { lang: TLang }) {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = new URL(`${baseURL}brochure`);
  const query = {
    lang,
  };
  const normalizeQuery = queryString.stringify(query);

  const response = await axios.get(`${url}?${normalizeQuery}`);

  return await response.data;
}

async function getBrochureTypes({ lang }: { lang: TLang }) {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = new URL(`${baseURL}brochure-type`);
  const query = {
    lang,
  };
  const normalizeQuery = queryString.stringify(query);

  const response = await axios.get(`${url}?${normalizeQuery}`);

  return await response.data;
}
const BrochuresPage = async ({ params }: any) => {
  const dictionary = getDictionary(params.lang);

  const brochureTypes: IBrochureType[] = await getBrochureTypes({
    lang: params.lang,
  });
  const brochures: IBrochure[] = await getBrochures({ lang: params.lang });

  console.log("brochureTypes", brochureTypes);

  console.log("brochures", brochures);

  const renderBrochureTypes = brochureTypes.map((brochureType) => ({
    title: brochureType.title,
    brochures: brochures.filter(
      (brochure) => brochure.brochureType._id === brochureType._id
    ),
  }));

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
        {renderBrochureTypes.map((brochureType, i) => (
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
