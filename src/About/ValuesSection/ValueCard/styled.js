import styled from "styled-components";

export const ValueCardWrapper = styled.article`
  position: relative;
  min-height: 230px;
  padding: 28px;
  border: 1px solid rgba(128, 82, 214, 0.11);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 12px 30px rgba(72, 43, 102, 0.055);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 38px rgba(128, 82, 214, 0.12);
  }

  .corner-icon {
    position: absolute;
    top: 28px;
    right: 28px;
    color: #b7a3c7;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  &:hover .corner-icon {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translate(2px, -2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 0;
  }
`;

export const ValueIcon = styled.div`
  display: grid;
  width: 52px;
  height: 52px;
  margin-bottom: 22px;
  place-items: center;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 17px;
  background: linear-gradient(145deg, #f3eafe, #fcebf5);
  color: ${({ theme }) => theme.colors.primary};
`;

export const ValueTitle = styled.h3`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.17rem;
  font-weight: 750;
  letter-spacing: -0.02em;
`;

export const ValueDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.97rem;
  line-height: 1.75;
`;
