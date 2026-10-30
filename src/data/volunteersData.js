const volunteerNames = [
  "Łukasz Nowak", "Maja Kowalska", "Kamil Wiśniewski", "Zuzanna Wójcik", "Bartosz Kamiński",
  "Ola Lewandowska", "Natalia Zielińska", "Michał Szymański", "Anna Woźniak", "Jakub Dąbrowski",
  "Weronika Kozłowska", "Tomasz Jankowski", "Julia Mazur", "Paweł Krawczyk", "Alicja Kaczmarek",
  "Filip Piotrowski", "Emilia Grabowska", "Mateusz Pawłowski", "Lena Michalska", "Marcel Król",
  "Klaudia Wieczorek", "Adam Jabłoński", "Wiktoria Wróbel", "Szymon Nowakowski", "Martyna Majewska",
  "Igor Olszewski", "Hanna Stępień", "Wojciech Malinowski", "Nadia Jaworska", "Mikołaj Pawlak",
  "Aleksandra Witkowska", "Dawid Walczak", "Kinga Sikora", "Patryk Baran", "Zofia Rutkowska",
  "Antoni Michalak", "Karolina Szewczyk", "Oskar Ostrowski", "Gabriela Tomaszewska", "Julian Pietrzak",
  "Iga Zalewska", "Maksymilian Wróblewski", "Paulina Marciniak", "Błażej Zając", "Amelia Jasińska",
  "Kacper Bąk", "Ewa Duda", "Rafał Wieczorek", "Liwia Adamczyk", "Dorian Górski",
  "Nina Sadowska", "Artur Wilk", "Milena Czarnecka", "Sebastian Chmielewski", "Laura Lis",
  "Konrad Włodarczyk", "Dominika Borkowska", "Cezary Kubiak", "Sara Maciejewska", "Robert Szczepański",
];

const volunteerCities = [
  "Wrocław", "Gdańsk", "Kraków", "Poznań", "Łódź", "Lublin", "Szczecin", "Katowice",
  "Toruń", "Rzeszów", "Bydgoszcz", "Białystok", "Olsztyn", "Opole", "Warszawa", "Gdynia",
  "Kielce", "Zielona Góra", "Częstochowa", "Gliwice",
];

const volunteerAreas = [
  "akcje lokalne", "wsparcie wydarzeń", "działania edukacyjne", "pomoc sąsiedzka",
  "organizacja zbiórek", "promowanie wolontariatu", "wsparcie rodzin", "integracja społeczności",
  "działania kreatywne", "koordynacja akcji",
];

const experienceYears = [5, 3, 2, 4, 1, 6, 2, 3, 1, 4, 2, 5, 3, 1, 7, 2, 4, 1, 3, 5];

const formatExperience = (years) => {
  const lastTwoDigits = years % 100;
  const lastDigit = years % 10;
  const unit =
    lastTwoDigits >= 12 && lastTwoDigits <= 14
      ? "lat"
      : lastDigit === 1
        ? "rok"
        : lastDigit >= 2 && lastDigit <= 4
          ? "lata"
          : "lat";

  return `${years} ${unit} zaangażowania`;
};

export const volunteersData = volunteerNames.map((name, index) => {
  const experienceYearsValue = experienceYears[index % experienceYears.length];

  return {
    id: index + 1,
    name,
    city: volunteerCities[index % volunteerCities.length],
    experienceYears: experienceYearsValue,
    experienceLabel: formatExperience(experienceYearsValue),
    area: volunteerAreas[index % volunteerAreas.length],
  };
});
