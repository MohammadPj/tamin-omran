import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { IArticle } from "~/types/article";

interface Props {
  article: IArticle;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <Box display={"flex"} gap={4} sx={{cursor: 'pointer'}}>
      <Image src={article.image} alt={""} width={250} height={160} />

      <Stack gap={4} mt={2}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography fontWeight={700} fontSize={20}>{article.title}</Typography>

          <Typography fontWeight={400} fontSize={16} color={'text.secondary'}>{article.lastUpdate.toLocaleDateString()}</Typography>
        </Box>

        <Typography fontWeight={400} fontSize={16} color={'text.secondary'}>{article.description}</Typography>
      </Stack>
    </Box>
  );
};

export default ArticleCard;
