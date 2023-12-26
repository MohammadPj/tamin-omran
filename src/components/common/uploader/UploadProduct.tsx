import React, { ChangeEvent, FC } from "react";
import Box from "@mui/material/Box";
import SvgPlus from "~/components/icons/final/Plus";
import { Typography } from "@mui/material";

interface UploadProductProps {
  id: string;
  handleImageUpload?: (files: FileList) => void;
  title?: string;
  multiple?: boolean
}

const UploadProduct: FC<UploadProductProps> = ({
  id,
  handleImageUpload,
  title,
  multiple
}) => {
  return (
    <div>
      <input
        type={"file"}
        accept="image/jpeg, image/png, image/jpg"
        id={id}
        style={{ display: "none" }}
        multiple={multiple !== false}
        onChange={(e) =>
          handleImageUpload ? handleImageUpload(e?.target?.files!) : {}
        }
      />

      <Box
        width={"100%"}
        component={"label"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        htmlFor={id}
        sx={{ aspectRatio: 1, cursor: "pointer" }}
        bgcolor={"grey.1"}
        borderRadius={1}
      >
        <SvgPlus width={48} primarycolor={"grey"} />
        {title && (
          <Typography color={"n.2"} fontSize={14}>
            {title}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default UploadProduct;
