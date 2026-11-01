import React from "react";
import { ArrowRight, CalendarPlus, FileText, PencilLine } from "lucide-react";
import { QuickActionCard } from "./QuickActionCard";
import { ActionsSection, ActionsHeading, ActionsGrid } from "./styled";

const actions = [
  {
    id: "ready",
    title: "Zgłoś gotowość",
    description: "Daj znać, że możesz wziąć udział w najbliższych działaniach.",
    to: "/user/dashboard/moj-wolontariat",
    Icon: CalendarPlus,
  },
  {
    id: "schedule",
    title: "Sprawdź harmonogram",
    description: "Zobacz terminy i informacje o zaplanowanych kwestach.",
    to: "/user/dashboard/harmonogram",
    Icon: ArrowRight,
  },
  {
    id: "documents",
    title: "Moje dokumenty",
    description: "Przejdź do dokumentów związanych z wolontariatem.",
    to: "/user/dashboard/dokumenty",
    Icon: FileText,
  },
  {
    id: "profile",
    title: "Uzupełnij profil",
    description: "Dodaj numer telefonu i pozostałe dane kontaktowe.",
    to: "/user/dashboard/ustawienia",
    Icon: PencilLine,
  },
];

export const QuickActions = () => (
  <ActionsSection aria-labelledby="dashboard-actions-title">
    <ActionsHeading id="dashboard-actions-title">Szybkie akcje</ActionsHeading>
    <ActionsGrid>
      {actions.map((action) => (
        <QuickActionCard key={action.id} action={action} />
      ))}
    </ActionsGrid>
  </ActionsSection>
);
