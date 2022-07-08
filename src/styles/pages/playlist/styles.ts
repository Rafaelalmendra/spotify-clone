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

export const BodyListHeader = styled.ul`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: 16px 6fr 4fr 4fr minmax(120px, 1fr);
  padding: 0 1rem 0.4rem 1rem;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);

  li {
    color: var(--gray);
    line-height: 1rem;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export const BodyListItens = styled.div`
  display: grid;
  grid-gap: 16px;
  align-items: center;
  grid-template-columns: 16px 6fr 4fr 4fr minmax(120px, 1fr);
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 1.4rem;

  &:hover {
    background: var(--grayPrimary);

    p,
    span {
      color: var(--white) !important;
    }

    .playIcon {
      display: flex;
    }

    .numberText {
      display: none;
    }
  }

  li {
    color: var(--gray);
    line-height: 1rem;
    font-size: 0.845rem;
    letter-spacing: 0.1em;
  }

  .numberText {
    font-size: 1.125rem;
  }

  .playIcon {
    display: none;
  }

  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ImageAndMusicTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const MusicTitleAndArtist = styled.div`
  margin-left: 0.75rem;

  p {
    margin-bottom: 4px;
    font-size: 1rem;
    color: var(--white);
  }
`;
