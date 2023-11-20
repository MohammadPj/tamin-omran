import React, { FC } from "react";
import UploadProduct from "~/components/common/uploader/UploadProduct";
import Box from "@mui/material/Box";

interface UploadProductSectionProps {}

const UploadProductSection: FC<UploadProductSectionProps> = () => {
  return (
    <Box>
      <UploadProduct id={"salam"} title={"برای بارگذاری عکس محصول کلیک کنید"} />

      <Box display={"flex"} gap={2} mt={2}>
        <Box width={130}>
          <UploadProduct id={"by"} />
        </Box>
      </Box>
    </Box>
  );
};

export default UploadProductSection;
