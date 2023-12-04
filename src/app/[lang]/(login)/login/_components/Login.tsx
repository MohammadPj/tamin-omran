"use client";
import React from "react";
import { Box, Button, Stack } from "@mui/material";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import { useLogin } from "~/services/api/hooks";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "~/store/user/userSlice";

interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const { mutateAsync: mutateLogin } = useLogin();

  const form = useForm<ILoginForm>();

  const inputList: IUseFormInput[] = [
    {
      name: "email",
      label: "email",
      type: "email",
    },
    {
      name: "password",
      label: "password",
      type: "password",
    },
  ];

  const handleLogin = async (values: ILoginForm) => {
    try {
      const res = await mutateLogin(values);
      dispatch(setToken(res.token));
      enqueueSnackbar("شما با موفقبت لاگین شدید", { variant: "success" });
      // router.push("/" as any);
    } catch (e: any) {
      enqueueSnackbar(e.response?.data, { variant: "error" });
    }
  };

  return (
    <Stack
      component={"form"}
      onSubmit={form.handleSubmit(handleLogin)}
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box>
        <InputListWithUseForm
          inputList={inputList}
          form={form}
          gridItemProps={{ xs: 12 }}
        />

        <Box mt={4}>
          <Button type={"submit"}>Login</Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
