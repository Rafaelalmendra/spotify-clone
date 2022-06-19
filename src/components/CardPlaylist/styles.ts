import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--grayQuartenary);
  border-radius: 4px;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
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

    transition: all 0.3s ease-in-out;

    img {
      width: 34px;
      height: 34px;
      margin-left: 3px;

      object-fit: cover;
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
