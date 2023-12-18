"use client";
import React, { FC, useState } from "react";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import { TLang } from "~/services/api/type";
import { getDictionary } from "~/i18n";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import {useLogin, useRegisterMutation} from "~/services/api/hooks";
import {useSnackbar} from "notistack";

interface LoginModalProps {
  isOpen: boolean;
  lang: TLang;
  onClose: () => void;
}

interface IForm {
  email: string;
  password: string;
  phoneNumber?: string;
}

type TLoginMode = "login" | "register";

const LoginAndRegisterModal: FC<LoginModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  const {enqueueSnackbar} = useSnackbar()
  const dictionary = getDictionary(lang);

  const [mode, setMode] = useState<TLoginMode>("login");

  const {mutateAsync: mutateLogin} = useLogin()
  const {mutateAsync: mutateRegister} = useRegisterMutation()

  const form = useForm<IForm>();

  const loginList: IUseFormInput[] = [
    {
      name: "email",
      label: dictionary("common.email"),
      rules: { required: dictionary("common.fieldIsRequired") },
      type: 'email'
    },
    {
      name: "password",
      label: dictionary("common.password"),
      rules: { required: dictionary("common.fieldIsRequired") },
      type: "password",
    },
  ];

  const registerList: IUseFormInput[] = [
    {
      name: "email",
      label: dictionary("common.email"),
      rules: { required: dictionary("common.fieldIsRequired") },
      type: 'email'
    },
    {
      name: "phoneNumber",
      label: dictionary("common.phoneNumber"),
      rules: { required: dictionary("common.fieldIsRequired") },
    },
    {
      name: "password",
      label: dictionary("common.password"),
      rules: { required: dictionary("common.fieldIsRequired") },
      type: "password",
    },
    {
      name: "repeatPassword",
      label: dictionary("common.repeatPassword"),
      rules: {
        required: dictionary("common.fieldIsRequired"),
        validate: {}
      },
      type: "password",
    },
  ];

  const handleSubmitForm = (values: IForm) => {
    if (mode === "login") handleLogin(values);
    else handleRegister(values);
  };

  const handleLogin = async (values: IForm) => {
    console.log('handle login')

    const res = await mutateLogin({email: values.email, password: values.password}, {
      onError: (e: any) => {
        enqueueSnackbar(e?.response?.data || "we have an error", {variant: 'error'})
      },
      onSuccess: () => {
        // enqueueSnackbar('')
      }
    })

    console.log('res', res)
  };

  const handleRegister = (values: IForm) => {
    console.log('handle Register')
  };

  const handleToggleMode = () => {
    form.reset()
    setMode(mode === 'login' ? "register" : 'login')
  }

  const handleClose = () => {
    setMode("login");
    form.reset();
    onClose();
  };

  return (
    <CustomModal
      onClose={handleClose}
      open={isOpen}
      title={
        mode === "login"
          ? dictionary("common.header.login")
          : dictionary("common.header.register")
      }
      boxProps={{ width: "90%", maxWidth: 400 }}
    >
      <Box component={"form"} onSubmit={form.handleSubmit(handleSubmitForm)}>
        {mode === "login" ? (
          <Stack gap={4}>
            <InputListWithUseForm
              inputList={loginList}
              form={form}
              gridItemProps={{ xs: 12 }}
            />

            <Button type={"submit"}>{dictionary("common.header.login")}</Button>

            <Box display={"flex"} gap={2}>
              <Typography fontWeight={500} fontSize={14}>
                {dictionary("common.notRegisterYet")}
              </Typography>

              <Typography
                color={"primary.main"}
                fontWeight={500}
                fontSize={14}
                sx={{ cursor: "pointer" }}
                onClick={handleToggleMode}
              >
                {dictionary("common.header.register")}
              </Typography>
            </Box>
          </Stack>
        ) : (
          <Stack gap={4}>
            <InputListWithUseForm
              inputList={registerList}
              form={form}
              gridItemProps={{ xs: 12 }}
            />

            <Button type={"submit"}>
              {dictionary("common.header.register")}
            </Button>

            <Box display={"flex"} gap={2}>
              <Typography fontWeight={500} fontSize={14}>
                {dictionary("common.doYouHaveAccount")}
              </Typography>

              <Typography
                color={"primary.main"}
                fontWeight={500}
                fontSize={14}
                sx={{ cursor: "pointer" }}
                onClick={handleToggleMode}
              >
                {dictionary("common.header.login")}
              </Typography>
            </Box>
          </Stack>
        )}
      </Box>
    </CustomModal>
  );
};

export default LoginAndRegisterModal;
