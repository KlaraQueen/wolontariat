import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AuthStatusWrapper,
  AuthButton,
  LoginIcon,
  UserStatus,
  ProfileLink,
  ProfileIcon,
  LogoutButton,
  LogoutIcon,
} from "./AuthStatus/styled";

export const AuthStatus = () => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  return (
    <AuthStatusWrapper>
      {isAuthenticated ? (
        <UserStatus>
          <ProfileLink to="/user/dashboard">
            <ProfileIcon aria-hidden="true" />
            Profil
          </ProfileLink>
          <LogoutButton
            type="button"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            aria-label="Wyloguj się"
          >
            <LogoutIcon aria-hidden="true" />
            <span>Wyloguj się</span>
          </LogoutButton>
        </UserStatus>
      ) : (
        <AuthButton
          type="button"
          onClick={() =>
            loginWithRedirect({
              appState: { returnTo: "/user/dashboard" },
            })
          }
          disabled={isLoading}
        >
          <LoginIcon aria-hidden="true" />
          {isLoading ? "Ładowanie…" : "Zaloguj się"}
        </AuthButton>
      )}
    </AuthStatusWrapper>
  );
};
