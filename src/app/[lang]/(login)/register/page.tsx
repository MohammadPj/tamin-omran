"use client";
import React from "react";
import { Metadata } from "next";
import { Box, Button, Stack } from "@mui/material";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import { setToken } from "~/store/user/userSlice";
import { useRegisterMutation } from "~/services/api/hooks";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { mutateAsync: mutateRegister } = useRegisterMutation();
  const form = useForm<IRegisterForm>();

  const inputList: IUseFormInput[] = [
    {
      name: "name",
      label: "name",
    },
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

  const handleRegister = async (values: IRegisterForm) => {
    try {
      const res = await mutateRegister(values);

      dispatch(setToken(res.token));
      enqueueSnackbar("شما با موفقبت ثبت نام شدید", { variant: "success" });
    } catch (e: any) {
      enqueueSnackbar(e.response?.data, { variant: "error" });
    }
  };

  return (
    <Stack
      component={"form"}
      onSubmit={form.handleSubmit(handleRegister)}
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
          <Button type={"submit"}>Register</Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default RegisterPage;
