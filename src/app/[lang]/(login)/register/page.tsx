"use client";
import React from "react";
import { Metadata } from "next";
import {Box, Button, Stack} from "@mui/material";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";

interface IRegisterForm {}

const RegisterPage = () => {
  const form = useForm<IRegisterForm>();

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

  return (
    <Stack minHeight={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Box>
        <InputListWithUseForm
          inputList={inputList}
          form={form}
          gridItemProps={{ xs: 12 }}
        />

        <Box mt={4}>
          <Button>Register</Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default RegisterPage;
