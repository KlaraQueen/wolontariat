import styled from "styled-components";

export const ActivityPanel = styled.section`
  padding: clamp(17px, 2.2vw, 22px);
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};
`;

export const ActivityHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;

  > span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.72rem;
  }
`;

export const ActivityTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.02rem;
  font-weight: 800;
`;

export const ActivityEmpty = styled.p`
  margin: 0;
  padding: 14px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.palePurple};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.82rem;
  line-height: 1.6;
`;

export const ActivityList = styled.div`
  display: grid;
  gap: 10px;
`;
