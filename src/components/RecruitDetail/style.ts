import styled from "styled-components";
import { LAYOUT_WIDTH } from "../common/Layout/constant";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap = styled.div`
  width: ${LAYOUT_WIDTH}px;
  display: flex;
  column-gap: 20px;
  padding-bottom: 20px;
`;

export const ContentWrap = styled.div`
  min-width: 660px;
  display: flex;
  flex-direction: column;
`;
