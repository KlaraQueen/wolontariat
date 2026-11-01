import styled from "styled-components";

export const ActivityRow = styled.article`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 11px;
  padding: 11px 12px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.volunteerCardGradient};
`;

export const ActivityIcon = styled.span`
  display: grid;
  width: 32px;
  height: 32px;
  flex: none;
  place-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.paleRose};
  color: ${({ theme }) => theme.colors.success};

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const ActivityCopy = styled.div`
  display: grid;
  min-width: 0;
  gap: 3px;
`;

export const ActivityName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
`;

export const ActivityDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.72rem;
`;
