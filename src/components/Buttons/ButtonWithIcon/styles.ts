import styled from 'styled-components';

interface ButtonWithIconProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  active?: boolean;
}

export const ButtonWithIconContainer = styled.div<ButtonWithIconProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${(props) =>
    (props.color ? props.color : 'var(--gray)') &&
    (props.active ? 'var(--white)' : 'var(--gray)')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};

  cursor: pointer;
  border-radius: 0.375rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--white);
  }
`;
