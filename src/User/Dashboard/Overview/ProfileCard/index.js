import React from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Mail, MapPin, Pencil, Phone } from "lucide-react";
import {
  ProfilePanel,
  ProfileHeader,
  AvatarImage,
  AvatarFallback,
  ProfileIdentity,
  ProfileName,
  VolunteerId,
  StatusBadge,
  StatusIcon,
  ProfileDetails,
  DetailRow,
  DetailIcon,
  ProfileAction,
  ActionIcon,
} from "./styled";

const getInitials = (user) => {
  const name = user?.name || user?.email || "W";
  return name
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toLocaleUpperCase("pl"))
    .join("");
};

export const ProfileCard = ({ user, status }) => (
  <ProfilePanel aria-labelledby="volunteer-profile-title">
    <ProfileHeader>
      {user?.picture ? (
        <AvatarImage
          src={user.picture}
          alt={`Zdjęcie profilowe: ${user.name || "wolontariusz"}`}
        />
      ) : (
        <AvatarFallback aria-hidden="true">{getInitials(user)}</AvatarFallback>
      )}
      <ProfileIdentity>
        <ProfileName id="volunteer-profile-title">
          {user?.name || user?.email || "Wolontariusz"}
        </ProfileName>
        <VolunteerId>ID wolontariusza: nadawane po weryfikacji</VolunteerId>
      </ProfileIdentity>
    </ProfileHeader>

    <StatusBadge $tone={status.tone}>
      <StatusIcon><BadgeCheck aria-hidden="true" /></StatusIcon>
      <span>
        <strong>{status.label}</strong>
        <small>{status.description}</small>
      </span>
    </StatusBadge>

    <ProfileDetails>
      <DetailRow>
        <DetailIcon><Mail aria-hidden="true" /></DetailIcon>
        <span>
          <small>Adres e-mail</small>
          <strong>{user?.email || "Nie podano"}</strong>
        </span>
      </DetailRow>
      <DetailRow>
        <DetailIcon><Phone aria-hidden="true" /></DetailIcon>
        <span>
          <small>Telefon</small>
          <strong>Nie podano</strong>
        </span>
      </DetailRow>
      <DetailRow>
        <DetailIcon><MapPin aria-hidden="true" /></DetailIcon>
        <span>
          <small>Weryfikacja</small>
          <strong>Oczekuje na uzupełnienie danych</strong>
        </span>
      </DetailRow>
    </ProfileDetails>

    <ProfileAction as={Link} to="/user/dashboard/ustawienia">
      Edytuj profil
      <ActionIcon><Pencil aria-hidden="true" /></ActionIcon>
    </ProfileAction>
  </ProfilePanel>
);
