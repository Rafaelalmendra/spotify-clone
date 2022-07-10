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

export const CardImage = styled.div`
  width: 240px;
  height: 240px;
  background: var(--green);
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1.3rem;
`;

export const InfosPlaylist = styled.div`
  display: flex;

  p:first-child {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Body = styled.div`
  padding: 2.42rem 2.5rem 2rem 2.5rem;
`;

export const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--green);
  border-radius: 50%;

  img {
    margin-left: 5px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.05);
  }
`;

export const BodyOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.42rem;
`;

export const BodyList = styled.div`
  display: grid;
  padding-bottom: 0.4rem;
`;
