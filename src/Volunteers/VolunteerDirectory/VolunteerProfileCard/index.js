import React from "react";
import {
  ProfileCard,
  ProfileAvatar,
  ProfileName,
  ProfileCity,
  MapPinIcon,
  ProfileArea,
  UsersRoundIcon,
  ExperienceBadge,
  SparklesIcon,
} from "./styled";

export const VolunteerProfileCard = ({ volunteer }) => (
  <ProfileCard>
    <ProfileAvatar aria-hidden="true">{volunteer.name.slice(0, 1)}</ProfileAvatar>
    <ProfileName>{volunteer.name}</ProfileName>
    <ProfileCity>
      <MapPinIcon aria-hidden="true" />
      {volunteer.city}
    </ProfileCity>
    <ProfileArea>
      <UsersRoundIcon aria-hidden="true" />
      {volunteer.area}
    </ProfileArea>
    <ExperienceBadge>
      <SparklesIcon aria-hidden="true" />
      {volunteer.experienceLabel}
    </ExperienceBadge>
  </ProfileCard>
);
