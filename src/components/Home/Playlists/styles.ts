import styled from 'styled-components';

export const PlaylistContainer = styled.div`
  grid-gap: 16px 24px;
  display: grid;
  grid-template: auto/repeat(auto-fill, minmax(max(10px, 25%), 1fr));
`;
