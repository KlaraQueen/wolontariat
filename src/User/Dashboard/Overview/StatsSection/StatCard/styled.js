import styled from "styled-components";

export const StatCardWrapper = styled.article`
  min-width: 0;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 17px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  box-shadow: 0 7px 20px rgba(72, 43, 102, 0.035);
`;

export const StatTop = styled.div`
  display: flex;
  min-height: 34px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const StatIcon = styled.span`
  display: grid;
  width: 31px;
  height: 31px;
  flex: none;
  place-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.palePurple};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StatLabel = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.74rem;
  font-weight: 650;
  line-height: 1.4;
`;

export const StatValue = styled.p`
  margin: 7px 0 4px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.1;
`;

export const StatDetail = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.69rem;
  line-height: 1.45;
`;
