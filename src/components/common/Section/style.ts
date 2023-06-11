import styled, { CSSObject } from "styled-components";

export const Container = styled.div<{
  width: CSSObject["width"];
  height: CSSObject["height"];
  customStyle?: CSSObject;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 20px 0px;

  ${({ customStyle }) => customStyle}
`;

export const Title = styled.h2<{
  customStyle?: CSSObject;
}>`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;

  ${({ customStyle }) => customStyle}
`;

export const SubTitle = styled.h3<{
  customStyle?: CSSObject;
}>`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 30px;

  ${({ customStyle }) => customStyle}
`;
