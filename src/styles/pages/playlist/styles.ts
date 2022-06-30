import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 2.42rem 2.5rem 2rem 2.5rem;

  background: #1f1f1f;

  img {
    width: 240px;
    height: 240px;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
  }
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1.3rem;
`;

export const InfosPlaylist = styled.div`
  display: flex;
`;
