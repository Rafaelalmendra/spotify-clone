import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3.125rem 2.5rem 3rem 2.5rem;
`;

export const PlaylistContainer = styled.div`
  grid-gap: 16px 24px;
  display: grid;
  grid-template: auto/repeat(auto-fill, minmax(max(10px, 25%), 1fr));
`;
