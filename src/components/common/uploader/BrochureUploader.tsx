import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SvgDownload from "~/components/icons/final/Download";
import { Button, Typography } from "@mui/material";
import SvgFile from "~/components/icons/output/File";
import SvgEdit from "~/components/icons/output/Edit";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEye from "~/components/icons/final/Eye";

interface BrochureUploaderProps {
  onChange: (file: File) => void;
  defaultFile?: string;
  onDelete: () => void;
  onPreview?: () => void;
}

const BrochureUploader: FC<BrochureUploaderProps> = ({
  defaultFile,
  onChange,
  onDelete,
  onPreview,
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [blobFile, setBlobFile] = useState(defaultFile);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (!file) return;

    setFile(file);
    setBlobFile(undefined)
    onChange(file);
  };

  const handleDeleteFile = () => {
    setFile(undefined);
    setBlobFile(undefined);
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
        width={"100%"}
        height={300}
        borderRadius={2}
        border={"1px dotted"}
        borderColor={"grey.3"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        {file || blobFile ? (
          <Stack alignItems={"center"} gap={2}>
            <SvgFile />

            <Box display={"flex"} gap={2}>
              <Box
                display={"flex"}
                sx={{ cursor: "pointer" }}
                component={"label"}
                htmlFor={"uploader"}
              >
                <SvgEdit />
              </Box>

              <Box
                display={"flex"}
                sx={{ cursor: "pointer" }}
                onClick={handleDeleteFile}
              >
                <SvgDelete />
              </Box>

              {blobFile && (
                <Box
                  display={"flex"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open(blobFile)}
                >
                  <SvgEye />
                </Box>
              )}
            </Box>
            <Typography>{file?.name || blobFile}</Typography>
          </Stack>
        ) : (
          <>
            <SvgDownload />

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
