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
export const Profile = styled.div`
  position: relative;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 2.5625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.125rem 0.625rem 0.125rem 0.25rem;

  border-radius: 2.0625rem;
  background: var(--blackQuinary);

  cursor: pointer;

  img:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const ProfileOpenContainer = styled.div`
  position: absolute;
  right: 0;
  top: 2.5rem;

  width: 14.5rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.25rem;
  gap: 0.5rem;

  margin-top: 0.5rem;

  border-radius: 0.25rem;
  background: var(--graySecondary);
`;

export const ProfileOpenItem = styled.div<ArrowProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem;

  border-radius: 0.25rem;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${(props) => (props.disabled ? 'none' : 'var(--grayTertiary)')};
  }
`;
