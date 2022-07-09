import styled from 'styled-components';

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
