import styled from 'styled-components';

export const BodyListItens = styled.div`
  height: 60px;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 16px 6fr 4fr 4fr minmax(120px, 1fr);
  align-items: center;

  margin-top: 1rem;
  padding: 12px 16px;

  border-radius: 4px;

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

    .optionsIcon {
      display: flex;
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
    font-size: 0.875rem;
    color: var(--white);
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const DateAndFavorite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 1rem;

  svg {
    display: none;
  }
`;

export const TimeAndOptions = styled.div`
  display: flex;
  align-items: center;

  svg {
    display: none;
    margin-left: 1rem;
  }
`;

export const NoImage = styled.div`
  width: 40px;
  height: 40px;
  background: var(--grayPrimary);
`;
