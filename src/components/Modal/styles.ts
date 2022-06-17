import styled from 'styled-components';

export const ModalCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);

  width: 40.75rem;
  height: 22.125rem;

  display: flex;

  border-radius: 1rem;
  background: linear-gradient(106.42deg, #374448 0%, #292a2a 100%);
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
`;

export const DarkBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  opacity: 0.8;
  background-color: var(--black);
`;
