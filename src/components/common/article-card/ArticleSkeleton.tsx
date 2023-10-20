import React, {FC} from 'react';
import {Box, Skeleton, Stack} from "@mui/material";

const ArticleSkeleton: FC = () => {
  return (
    <Box display={"flex"} gap={4} width={'100%'}>
      <Skeleton variant={'rectangular'} width={250} height={160}/>

      <Stack gap={4} py={2} width={'100%'}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Skeleton width={100}/>

          <Skeleton width={50}/>
        </Box>

        <Skeleton variant={'rectangular'} width={'100%'} sx={{flexGrow: 1}}/>
      </Stack>
    </Box>
  );
};

export default ArticleSkeleton;
