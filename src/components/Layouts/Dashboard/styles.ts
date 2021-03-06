import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;

  background: linear-gradient(
    180deg,
    #222222 0%,
    #1f1f1f 11.64%,
    #171717 25.66%,
    #161616 32.94%,
    #151515 35.98%,
    #131313 44.89%,
    #121212 55.22%,
    #121212 75.34%,
    #121212 85.45%,
    #121212 100%
  );
`;
