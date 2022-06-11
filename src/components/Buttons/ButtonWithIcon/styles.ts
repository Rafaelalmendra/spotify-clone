import styled from 'styled-components';

interface ButtonWithIconProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const ButtonWithIconContainer = styled.div<ButtonWithIconProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  color: ${(props) => (props.color ? props.color : 'var(--white)')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.1875rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};

  cursor: pointer;
`;
