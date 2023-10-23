"use client"; // Error components must be Client Components
import { Button, Stack, Typography } from "@mui/material";

export default function MainPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"} gap={4}>
      <Typography variant={"h1"} fontWeight={700} fontSize={32}>
        صفحه با خطا مواجه شد
      </Typography>
      <Button onClick={() => reset()}>تلاش مجدد</Button>
    </Stack>
  );
}