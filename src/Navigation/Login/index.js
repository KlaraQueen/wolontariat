import React from "react";
import { LoginItem, LoginButton } from "./styled";

export const Login = () => {
  return (
    <LoginItem>
      <LoginButton to="/login">Zaloguj się</LoginButton>
    </LoginItem>
  );
};