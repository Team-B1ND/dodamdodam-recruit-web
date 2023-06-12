import styled, { CSSObject } from "styled-components";

export const Container = styled.div<{ customStyle?: CSSObject }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${({ customStyle }) => customStyle}
`;
