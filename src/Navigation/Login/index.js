import React from "react";
import { LoginItem, LoginButton } from "./styled";

export const Login = () => {
  return (
    <LoginItem>
      <LoginButton to="/logowanie">Zaloguj</LoginButton>
    </LoginItem>
  );
};