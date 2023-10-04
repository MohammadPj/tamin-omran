"use client";
import React, { FC, ReactElement } from "react";
import { IPost } from "@/app/(privatePages)/blog/page";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

interface Props {
  posts: IPost[];
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <div>
      <h1>posts</h1>
      <Grid container display={"flex"} gap={4}>
        {posts?.map((post) => (
          <Grid key={post.id} item xs={4}>
            <Card >
              <CardContent>
                <Typography>{post.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
