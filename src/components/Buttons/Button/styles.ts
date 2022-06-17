import styled from 'styled-components';

interface ButtonContainerProps {
  width?: string;
  border?: boolean;
  backgroundColor?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1.125rem;

  width: ${(props) => (props.width ? props.width : '32.5rem')};
  height: 4rem;

  font-size: 24px;
  font-weight: bold;
  color: var(--white);
  text-transform: uppercase;

  border-radius: 79px;
  background: ${(props) => props.backgroundColor || 'var(--white)'};
  border: ${(props) => (props.border ? '1px solid var(--white)' : 'none')};

  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: opacity(0.9);
  }
`;
