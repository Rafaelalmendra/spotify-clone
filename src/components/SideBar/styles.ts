import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;

  height: 100vh;
  background: var(--black);
  padding: 0 1.8125rem;
`;

export const ImageContainer = styled.div`
  margin: 1.9375rem 0 1.9375rem 0;
`;

export const OptionsTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;

export const OptionsMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.4rem;
`;

export const OptionsBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.4rem;
  overflow-y: scroll;
`;
