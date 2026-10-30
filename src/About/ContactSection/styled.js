import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  width: min(calc(100% - 48px), 1120px);
  margin: clamp(56px, 8vw, 100px) auto 76px;
  padding: clamp(34px, 5vw, 54px);
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 30px;
  background: linear-gradient(140deg, #f3eafe, #fff0f8 65%, #fff8f4);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 36px), 1120px);
    margin: 48px auto 56px;
    padding: 28px 20px;
    border-radius: 24px;
  }
`;

export const ContactHeading = styled.h2`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.6vw, 2.7rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  text-align: center;
`;

export const ContactIntro = styled.p`
  max-width: 580px;
  margin: 0 auto 30px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.98rem;
  line-height: 1.7;
  text-align: center;
`;

export const ContactLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(128, 82, 214, 0.11);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.86);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.87rem;
  font-weight: 700;
  overflow-wrap: anywhere;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(128, 82, 214, 0.12);
  }

  span {
    display: grid;
    gap: 3px;
  }

  small {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.72rem;
    font-weight: 500;
  }
`;

export const ContactIcon = styled.span`
  display: grid !important;
  width: 40px;
  height: 40px;
  flex: none;
  place-items: center;
  border-radius: 13px;
  background: linear-gradient(145deg, #f3eafe, #fcebf5);
  color: ${({ theme }) => theme.colors.primary};
`;
