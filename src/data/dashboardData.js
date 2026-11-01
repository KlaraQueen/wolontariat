export const dashboardData = {
  status: {
    label: "Profil do uzupełnienia",
    tone: "pending",
    description: "Uzupełnij dane, aby koordynator mógł zweryfikować konto.",
  },
  stats: [
    {
      id: "hours",
      label: "Godziny wolontariatu",
      value: "—",
      detail: "Pojawią się po rozliczeniu pierwszej akcji",
      icon: "clock",
    },
    {
      id: "fundraising",
      label: "Zebrane środki",
      value: "—",
      detail: "Brak rozliczonych zbiórek",
      icon: "heart",
    },
    {
      id: "events",
      label: "Najbliższe wydarzenie",
      value: "Brak",
      detail: "Nie masz jeszcze przypisanego wydarzenia",
      icon: "calendar",
    },
  ],
  nextEvent: null,
  activities: [],
  notice: {
    title: "Witaj w centrum wolontariusza",
    message:
      "Gdy pojawią się nowe informacje od koordynatora, znajdziesz je właśnie tutaj.",
  },
};
