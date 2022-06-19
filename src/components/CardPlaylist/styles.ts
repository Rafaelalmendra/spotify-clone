import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--grayQuartenary);
  border-radius: 4px;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  img {
    width: 5.3rem;
    height: 5.3rem;
    object-fit: cover;
    border-radius: 4px 0 0 4px;
  }

  .playIcon {
    width: 3rem;
    height: 3rem;

    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    background: var(--green);
    border-radius: 50%;

    transition: opacity 0.3s ease-in-out;

    img {
      width: 34px;
      height: 34px;
      margin-left: 3px;

      object-fit: cover;

      &:hover {
        transform: scale(1.05);
      }
    }

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }
  }

  &:hover {
    background: var(--grayTertiary);

    .playIcon {
      opacity: 1;
    }
  }
`;

export const ImageAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.3125rem;
`;
