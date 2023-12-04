import React from "react";
import Login from "~/app/[lang]/(login)/login/_components/Login";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "ورود",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
