import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { IArticle } from "~/types/article";
import Link from "next/link";
import parse from "html-react-parser";
import { baseImageUrl } from "~/services/core/http";

interface Props {
  article: IArticle;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <Link href={`/articles/${article._id}` as any}>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={4}
        sx={{ cursor: "pointer" }}
      >
        <Box
          minWidth={{ xs: "100", sm: 250 }}
          position={"relative"}
          sx={{ aspectRatio: 250 / 160 }}
        >
          <Image
            src={
              article.image
                ? baseImageUrl + article.image
                : "/images/default/article-default.jpg"
            }
            alt={""}
            fill
          />
        </Box>

        <Stack gap={4} mt={2}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={700} fontSize={{ xs: 16, sm: 20 }}>
              {article.title}
            </Typography>

            <Typography
              fontWeight={400}
              fontSize={16}
              color={"text.secondary"}
              display={{ xs: "none", sm: "block" }}
            >
              {article?.updatedAt
                ? new Date(article?.updatedAt)?.toLocaleDateString("fa-IR")
                : "---"}
            </Typography>
          </Box>

          <Typography
            fontWeight={400}
            fontSize={{ xs: 12, sm: 16 }}
            color={"text.secondary"}
            textAlign={"justify"}
            lineHeight={2}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {parse(article.content)}
          </Typography>

          <Typography
            fontWeight={400}
            fontSize={14}
            color={"text.secondary"}
            display={{ xs: "block", sm: "none" }}
          >
            {article?.updatedAt
              ? new Date(article?.updatedAt)?.toLocaleDateString("fa-IR")
              : "---"}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default ArticleCard;
