import styled from "styled-components";
import { LAYOUT_WIDTH } from "../../common/Layout/constant";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: ${LAYOUT_WIDTH}px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SeeMoreWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
