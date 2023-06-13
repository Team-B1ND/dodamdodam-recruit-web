import styled, { CSSObject } from "styled-components";

export const Container = styled.div<{
  width: CSSObject["width"];
  height: CSSObject["height"];
  customStyle?: CSSObject;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 20px 0px;
  display: flex;
  flex-direction: column;

  ${({ customStyle }) => customStyle};
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
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #666;

  ${({ customStyle }) => customStyle}
`;
