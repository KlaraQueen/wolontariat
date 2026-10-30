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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(243, 234, 254, 0.95)
  );
  border-top: 1px solid rgba(128, 82, 214, 0.1);
  box-shadow: 0 -8px 24px rgba(128, 82, 214, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.75rem;
    text-align: center;
    padding: 1.25rem 1rem 0.9rem;
  }
`;
