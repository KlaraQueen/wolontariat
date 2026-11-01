import styled from "styled-components";

export const NoticePanel = styled.section`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorderStrong};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.volunteerPanelGradient};
`;

export const NoticeHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NoticeIcon = styled.span`
  display: grid;
  width: 36px;
  height: 36px;
  flex: none;
  place-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  color: ${({ theme }) => theme.colors.secondary};

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const NoticeTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.4;
`;

export const NoticeMessage = styled.p`
  margin: 11px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.8rem;
  line-height: 1.6;
`;
