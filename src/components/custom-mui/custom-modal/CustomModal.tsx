import React, { FC } from "react";

//@Mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { BoxProps, ModalProps } from "@mui/material";
import SvgClose from "~/components/icons/final/Close";
//---------------------------------------------------------------------------

interface Props extends ModalProps {
  onClose?: () => void;
  boxProps?: BoxProps;
  leftTitle?: React.ReactNode;
  withoutDivider?: boolean;
  withoutHeader?: boolean;
  scrollableProps?: BoxProps;
  preventClose?: boolean;
  onClickTopLeftBtn?: () => void;
  topLeftBtnTitle?: string;
  maxHeight?: string | number;
}

const CustomModal: FC<Props> = ({
  open,
  children,
  boxProps,
  onClose,
  title,
  leftTitle,
  sx,
  withoutDivider,
  withoutHeader,
  scrollableProps,
  preventClose,
  onClickTopLeftBtn,
  topLeftBtnTitle,
  maxHeight,
  ...rest
}) => {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      sx={{
        direction: "ltr",
        backdropFilter: "blur(5px)",
        "& .MuiBackdrop-root ": {
          backgroundColor: "rgba(27, 38, 44, 0.1)",
        },
        ...sx,
      }}
      onClose={() => {
        if (onClose && !preventClose) {
          onClose();
        }
      }}
      {...rest}
    >
      <Stack
        sx={{
          width: { xs: "90%", md: "auto" },
          minWidth: 300,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "10px",
          outline: "none",
          overflow: 'hidden',
          ...boxProps,
        }}
      >
        {!withoutHeader && (
          <>
            <Box
              display={"flex"}
              gap={3}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={3}
                py={2}
                px={4}
                width={"100%"}
                bgcolor={'primary.main'}
              >
                <Typography fontWeight={500} fontSize={16} color={'white'}>
                  {title}
                </Typography>

                <IconButton
                  onClick={() => (onClose ? onClose() : "")}
                  data-cy={"close-modal"}
                  sx={{ height: "auto", p: 0 }}
                >
                  <SvgClose primarycolor={'white'} width={24} />
                </IconButton>
              </Box>
            </Box>

            {!withoutDivider && (
              <Divider
                sx={{
                  borderColor: "gray.light",
                }}
              />
            )}
          </>
        )}

        <Stack height={"100%"} maxHeight={maxHeight || "73vh"} p={4}>
          {children}
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CustomModal;
