import styled from 'styled-components';

interface ArrowProps {
  disabled?: boolean;
}

//navigation
export const HeaderContainer = styled.div`
  width: 100%;
  height: 2.5625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding: 0 2.5rem 0 2.5rem;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 1.25rem;
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

//profile
export const ProfileContainer = styled.div`
  width: 9.1875rem;
  height: 2.5625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.125rem 0.625rem 0.125rem 0.25rem;

  border-radius: 2.0625rem;
  background: var(--blackQuinary);

  cursor: pointer;

  img:first-child {
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 50%;
  }
`;
