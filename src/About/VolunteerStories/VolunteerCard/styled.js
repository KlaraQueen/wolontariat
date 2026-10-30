import styled from "styled-components";

export const StoryCard = styled.article`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 250px;
  flex-direction: column;
  padding: 24px;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 22px;
  background: linear-gradient(145deg, #ffffff 15%, #fff8fc 100%);
  box-shadow: 0 10px 28px rgba(72, 43, 102, 0.05);

  .quote-mark {
    position: absolute;
    top: 21px;
    right: 22px;
    color: #d7c6ed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 0;
    padding: 21px;
  }
`;

export const StoryMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  padding-right: 28px;
`;

export const StoryName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 800;
`;

export const StoryLocation = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.84rem;
`;

export const StoryQuote = styled.p`
  margin: 20px 0 24px;
  color: #554660;
  font-size: 0.97rem;
  line-height: 1.75;
`;

export const StoryTenure = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  margin-top: auto;
  padding: 7px 10px;
  border: 1px solid rgba(212, 90, 166, 0.14);
  border-radius: 999px;
  background: #fff0f8;
  color: #a1488b;
  font-size: 0.78rem;
  font-weight: 700;
`;
