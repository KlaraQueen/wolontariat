import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  background-color: #f4f6f8;
  padding: 2rem;
`;

export const MainContent = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const WelcomeCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h1 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 0.5rem;
  }
`;
