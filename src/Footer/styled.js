import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  margin-top: auto;
  padding: 1.5rem 2.5rem 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 244, 255, 0.95));
  border-top: 1px solid rgba(91, 109, 255, 0.08);
  box-shadow: 0 -8px 24px rgba(91, 109, 255, 0.04);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.75rem;
    text-align: center;
    padding: 1.25rem 1rem 0.9rem;
  }
`;
