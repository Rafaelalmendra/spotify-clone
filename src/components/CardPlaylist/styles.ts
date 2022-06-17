import styled from 'styled-components';

export const Container = styled.div`
  width: 22.625rem;
  height: 6.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.3125rem;

  background: var(--grayQuartenary);
  border-radius: 4px;

  transition: background 0.2s ease-in-out;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
  }

  &:hover {
    background: var(--grayTertiary);
  }
`;
