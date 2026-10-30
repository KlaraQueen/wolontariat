import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import { volunteersData } from "../../data/volunteersData";
import { VolunteerProfileCard } from "./VolunteerProfileCard";
import {
  DirectoryWrapper,
  DirectoryControls,
  SearchField,
  SearchIcon,
  SearchInput,
  ClearSearchButton,
  CityFilter,
  ResultSummary,
  ProfileGrid,
  EmptyState,
  Pagination,
  PageButton,
  PageIndicator,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "./styled";

const profilesPerPage = 12;

export const VolunteerDirectory = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const cities = useMemo(
    () =>
      [...new Set(volunteersData.map((volunteer) => volunteer.city))].sort(
        (a, b) => a.localeCompare(b, "pl"),
      ),
    [],
  );

  const filteredVolunteers = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("pl");

    return volunteersData.filter((volunteer) => {
      const matchesCity = city === "all" || volunteer.city === city;
      const matchesSearch =
        !normalizedSearch ||
        `${volunteer.name} ${volunteer.city} ${volunteer.area}`
          .toLocaleLowerCase("pl")
          .includes(normalizedSearch);

      return matchesCity && matchesSearch;
    });
  }, [city, search]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredVolunteers.length / profilesPerPage),
  );
  const visibleVolunteers = filteredVolunteers.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage,
  );

  const updateSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const updateCity = (event) => {
    setCity(event.target.value);
    setCurrentPage(1);
  };

  return (
    <DirectoryWrapper aria-label="Katalog wolontariuszy">
      <DirectoryControls>
        <SearchField>
          <SearchIcon aria-hidden="true" />
          <SearchInput
            type="search"
            value={search}
            onChange={updateSearch}
            placeholder="Szukaj po imieniu, mieście lub obszarze"
            aria-label="Szukaj wolontariusza"
          />
          {search && (
            <ClearSearchButton
              type="button"
              onClick={() => {
                setSearch("");
                setCurrentPage(1);
              }}
              aria-label="Wyczyść wyszukiwanie"
            >
              <X aria-hidden="true" />
            </ClearSearchButton>
          )}
        </SearchField>

        <CityFilter
          value={city}
          onChange={updateCity}
          aria-label="Filtruj wolontariuszy według miasta"
        >
          <option value="all">Wszystkie miasta</option>
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </CityFilter>
      </DirectoryControls>

      <ResultSummary aria-live="polite">
        {filteredVolunteers.length === 0
          ? "Nie znaleziono osób spełniających te kryteria."
          : `Osoby w katalogu: ${filteredVolunteers.length}`}
      </ResultSummary>

      {visibleVolunteers.length > 0 ? (
        <ProfileGrid>
          {visibleVolunteers.map((volunteer) => (
            <VolunteerProfileCard key={volunteer.id} volunteer={volunteer} />
          ))}
        </ProfileGrid>
      ) : (
        <EmptyState>
          Spróbuj zmienić wyszukiwaną frazę albo wybrać inne miasto.
        </EmptyState>
      )}

      {pageCount > 1 && (
        <Pagination aria-label="Stronicowanie katalogu wolontariuszy">
          <PageButton
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            aria-label="Poprzednia strona"
          >
            <ChevronLeftIcon aria-hidden="true" />
          </PageButton>
          <PageIndicator aria-live="polite">
            Strona {currentPage} z {pageCount}
          </PageIndicator>
          <PageButton
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(pageCount, page + 1))
            }
            disabled={currentPage === pageCount}
            aria-label="Następna strona"
          >
            <ChevronRightIcon aria-hidden="true" />
          </PageButton>
        </Pagination>
      )}
    </DirectoryWrapper>
  );
};
