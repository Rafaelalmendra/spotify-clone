import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--blackSecondary);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 33px 0 33px 0;
  border-bottom: 1px solid var(--gray);

  @media (max-width: 768px) {
    padding: 18px 0 18px 0;
  }
`;

export const Main = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  //h2 {
  //margin-bottom: 1.125rem;
  //}

  button {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
