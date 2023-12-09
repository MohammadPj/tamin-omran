import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SvgDownload from "~/components/icons/final/Download";
import { Button, Typography } from "@mui/material";

interface BrochureUploaderProps {
  onChange: (file: File) => void;
  defaultFile?: File;
  onDelete: () => void;
}

const BrochureUploader: FC<BrochureUploaderProps> = ({
  defaultFile,
  onChange,
  onDelete,
}) => {
  const [file, setFile] = useState<File | undefined>(defaultFile);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (!file) return;

    setFile(file);
    onChange(file);
  };

  const handleDeleteFile = () => {
    setFile(undefined);
    onDelete();
  };

  return (
    <div>
      <input
        type={"file"}
        id={"uploader"}
        style={{ display: "none" }}
        onChange={handleChangeFile}
        accept="application/pdf"
      />

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

        {file ? (
          <Box>
            {file.name}
          </Box>
        ) : (
          <>
            <Typography color={"grey.4"}>
              فایل مورد نظر را بکشید و در این قسمت بیندازید
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
          </>
        )}
      </Stack>
    </div>
  );
};

export default BrochureUploader;
