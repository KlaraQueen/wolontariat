import React from "react";
import { UsersRound } from "lucide-react";
import { VolunteerDirectory } from "./VolunteerDirectory";
import {
  VolunteersPage,
  PageIntro,
  IntroIcon,
  PageEyebrow,
  PageTitle,
  PageDescription,
} from "./styled";

export const Volunteers = () => (
  <VolunteersPage>
    <PageIntro>
      <IntroIcon aria-hidden="true">
        <UsersRound />
      </IntroIcon>
      <PageEyebrow>Nasza społeczność</PageEyebrow>
      <PageTitle>Poznaj naszych wolontariuszy</PageTitle>
      <PageDescription>
        Ludzie z różnych miejsc i o różnych doświadczeniach, których łączy chęć
        wspierania innych. Znajdź swoją inspirację.
      </PageDescription>
    </PageIntro>
    <VolunteerDirectory />
  </VolunteersPage>
);
