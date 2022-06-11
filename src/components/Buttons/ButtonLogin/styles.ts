import styled from 'styled-components';

interface ButtonLoginContainerProps {
  border?: boolean;
  backgroundColor?: string;
}

export const ButtonLoginContainer = styled.button<ButtonLoginContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1.125rem;

  width: 32.5rem;
  height: 4rem;

  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  text-transform: uppercase;

  border-radius: 79px;
  background: ${(props) => props.backgroundColor || 'var(--white)'};
  border: ${(props) => (props.border ? '1px solid var(--white)' : 'none')};

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;
