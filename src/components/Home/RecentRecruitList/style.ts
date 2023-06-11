import styled from "styled-components";
import { LAYOUT_WIDTH } from "../../common/Layout/constant";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Wrap = styled.div`
  width: ${LAYOUT_WIDTH}px;
  display: flex;
  column-gap: 20px;
`;
