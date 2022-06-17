import styled from 'styled-components';

interface ImageProps {
  //widht-height
  width?: string;
  widthMobile?: string;
  height?: string;
  heightMobile?: string;

  //margin-padding
  margin?: string;
  marginMobile?: string;
  padding?: string;
  paddingMobile?: string;
}

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  @media (max-width: 768px) {
    width: ${(props) => props.widthMobile || '100%'};
    height: ${(props) => props.heightMobile};
    margin: ${(props) => props.marginMobile};
    padding: ${(props) => props.paddingMobile};
  }
`;

interface TitleProps {
  //font
  fontSize?: string;
  fontWeight?: string;

  //color
  color?: string;

  //text
  textAlign?: string;

  //margin-padding
  margin?: string;
  marginMobile?: string;
  padding?: string;
  paddingMobile?: string;
}

export const Title = styled.h2<TitleProps>`
  font-size: ${(props) => props.fontSize || '2rem'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  color: ${(props) => props.color || 'var(--white)'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  @media (max-width: 768px) {
    margin: ${(props) => props.marginMobile};
    padding: ${(props) => props.paddingMobile};
  }
`;

interface TextProps {
  //font
  fontSize?: string;
  fontWeight?: string;

  //text
  textAlign?: string;

  //color
  color?: string;

  //margin-padding
  margin?: string;
  marginMobile?: string;
  padding?: string;
  paddingMobile?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  color: ${(props) => props.color || 'var(--white)'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  @media (max-width: 768px) {
    margin: ${(props) => props.marginMobile};
    padding: ${(props) => props.paddingMobile};
  }
`;
