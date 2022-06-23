import styled from 'styled-components';

export const Container = styled.div`
  max-width: 180px;
  max-height: 350px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: var(--blackTertiary);
  padding: 0.875rem;
  border-radius: 6px;
  transition: background 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background: var(--graySecondary);
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const Infos = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 0.4rem;

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
