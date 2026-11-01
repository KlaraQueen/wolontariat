import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AuthStatusWrapper,
  AuthButton,
  LoginIcon,
  UserStatus,
  UserIdentity,
  UserName,
  UserEmail,
  LogoutButton,
  LogoutIcon,
} from "./AuthStatus/styled";

export const AuthStatus = () => {
  const { isAuthenticated, user, loginWithRedirect, logout, isLoading } =
    useAuth0();

  return (
    <AuthStatusWrapper>
      {isAuthenticated ? (
        <UserStatus>
          <UserIdentity>
            <UserName title={user?.name || "Użytkownik"}>
              {user?.name || "Użytkownik"}
            </UserName>
            {user?.email && (
              <UserEmail title={user.email}>{user.email}</UserEmail>
            )}
          </UserIdentity>
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
          onClick={() => loginWithRedirect()}
          disabled={isLoading}
        >
          <LoginIcon aria-hidden="true" />
          {isLoading ? "Ładowanie…" : "Zaloguj się"}
        </AuthButton>
      )}
    </AuthStatusWrapper>
  );
};
