import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import SvgEdit from "~/components/icons/output/Edit";
import SvgDownload from "~/components/icons/final/Download";
import SvgDelete from "~/components/icons/output/Delete";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface UploadArticleImageProps {
  defaultImage?: string;
  onChange: (file: File) => void;
  onDelete: () => void;
}

const UploadArticleImage: FC<UploadArticleImageProps> = ({
  defaultImage,
  onDelete,
  onChange,
}) => {
  const [image, setImage] = useState<string | undefined>(defaultImage);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    onChange(file);
  };

  const handleDeleteFile = () => {
    setImage(undefined);
    onDelete();
  };

  return (
    <div>
      <input
        type={"file"}
        id={"uploader"}
        style={{ display: "none" }}
        onChange={handleChangeFile}
        accept="image/*"
      />

      {image ? (
        <Box
          height={300}
          position={"relative"}
          sx={{
            "&:hover": {
              filter: "brightness(0.5)",
              "& div": {
                display: "flex",
              },
            },
          }}
        >
          <Box
            display={"none"}
            gap={2}
            position={"absolute"}
            left={"50%"}
            top={"50%"}
            zIndex={10}
            sx={{ transform: "translate(-50%, -50%)" }}
          >
            <Box
              display={"flex"}
              title={"ویرایش"}
              component={"label"}
              htmlFor={"uploader"}
            >
              <SvgEdit width={32} height={32} style={{ cursor: "pointer" }} />
            </Box>

            <Box title={"حذف"} display={"flex"} onClick={handleDeleteFile}>
              <SvgDelete
                width={32}
                height={32}
                primarycolor={"red"}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>

          <Image fill src={image} alt={"brochure"} />
        </Box>
      ) : (
        <Stack
          component={"label"}
          htmlFor={"uploader"}
          width={"100%"}
          height={300}
          borderRadius={2}
          border={"1px dotted"}
          borderColor={"grey.3"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <SvgDownload />

          <Typography color={"grey.4"}>
            عکس مورد نظر را بکشید و در این قسمت بیندازید
          </Typography>

          <Typography>یا</Typography>

          <Button
            component={"label"}
            size={"small"}
            color={"secondary"}
            htmlFor={"uploader"}
          >
            بارگذاری از فایل ها
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default UploadArticleImage;
