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
import { useLogin, useRegisterMutation } from "~/services/api/hooks";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setToken, setUserInfo } from "~/store/user/userSlice";

interface LoginModalProps {
  isOpen: boolean;
  lang: TLang;
  onClose: () => void;
}

interface IForm {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

type TLoginMode = "login" | "register";

const LoginAndRegisterModal: FC<LoginModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const dictionary = getDictionary(lang);
  const dispatch = useDispatch();

  const [mode, setMode] = useState<TLoginMode>("login");

  const { mutateAsync: mutateLogin } = useLogin();
  const { mutateAsync: mutateRegister } = useRegisterMutation();

  const form = useForm<IForm>();

  const loginList: IUseFormInput[] = [
    {
      name: "email",
      label: dictionary("common.email"),
      rules: { required: dictionary("common.fieldIsRequired") },
      type: "email",
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
      type: "email",
    },
    {
      name: "firstName",
      label: dictionary("common.firstName"),
      gridItemProp: { xs: 6 },
      rules: { required: dictionary("common.fieldIsRequired") },
    },
    {
      name: "lastName",
      label: dictionary("common.lastName"),
      gridItemProp: { xs: 6 },
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
      label: dictionary("common.loginAndRegister.repeatPassword"),
      rules: {
        required: dictionary("common.fieldIsRequired"),
        validate: (value: any) => {
          return value === form.getValues().password
            ? true
            : dictionary("common.loginAndRegister.passwordNotMatch");
        },
      },
      type: "password",
    },
  ];

  const handleSubmitForm = (values: IForm) => {
    if (mode === "login") handleLogin(values);
    else handleRegister(values);
  };

  const handleLogin = async (values: IForm) => {
    const res = await mutateLogin(
      { email: values.email, password: values.password },
      {
        onError: (e: any) => {
          enqueueSnackbar(e?.response?.data || "we have an error", {
            variant: "error",
          });
        },
        onSuccess: (data) => {
          enqueueSnackbar(
            dictionary("common.loginAndRegister.successLoginMessage", {
              username: data.firstName + " " + data.lastName,
            }),
            { variant: "success" }
          );

          onClose();
        },
      }
    );

    dispatch(
      setUserInfo({
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        isAdmin: res?.isAdmin
      })
    );
    dispatch(setToken(res.token));
  };

  const handleRegister = async (values: IForm) => {

    const res = await mutateRegister(
      {
        email: values.email,
        password: values.password,
        firstName: values.firstName!,
        lastName: values.lastName!,
      },
      {
        onError: (e: any) => {
          enqueueSnackbar(e?.response?.data || "we have an error", {
            variant: "error",
          });
        },
        onSuccess: (data) => {
          enqueueSnackbar(
            dictionary("common.loginAndRegister.successRegisterMessage", {
              username: data.firstName + " " + data.lastName,
            }),
            { variant: "success" }
          );

          onClose();
        },
      }
    );

    dispatch(
      setUserInfo({
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
      })
    );
    dispatch(setToken(res.token));
  };

  const handleToggleMode = () => {
    form.reset();
    setMode(mode === "login" ? "register" : "login");
  };

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
          <Stack gap={8}>
            <InputListWithUseForm
              inputList={loginList}
              form={form}
              gridItemProps={{ xs: 12 }}
            />

            <Button type={"submit"}>{dictionary("common.header.login")}</Button>

            <Box display={"flex"} gap={2}>
              <Typography fontWeight={500} fontSize={14}>
                {dictionary("common.loginAndRegister.notRegisterYet")}
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
          <Stack gap={8}>
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
                {dictionary("common.loginAndRegister.doYouHaveAccount")}
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
