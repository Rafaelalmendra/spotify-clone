import styled from 'styled-components';

interface ArrowProps {
  disabled?: boolean;
}

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;

  width: 100%;
  height: 2.5625rem;

  display: flex;
  align-items: center;
  margin-top: 1.25rem;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-left: 2.5rem;
`;

export const ArrowContainer = styled.div<ArrowProps>`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: var(--blackQuaternary);

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
