import styled from "styled-components";

export const EventPanel = styled.section`
  padding: clamp(17px, 2.2vw, 22px);
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.volunteerPanelGradient};
`;

export const EventHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    margin: 0 0 3px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.72rem;
  }
`;

export const EventIcon = styled.span`
  display: grid;
  width: 42px;
  height: 42px;
  flex: none;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const EventTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.96rem;
  font-weight: 800;
  line-height: 1.4;
`;

export const EventEmpty = styled.p`
  margin: 14px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.84rem;
  line-height: 1.6;
`;

export const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.volunteerInk};
  font-size: 0.82rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
