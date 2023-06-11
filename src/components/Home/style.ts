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
  flex-direction: column;
`;

export const Banner = styled.article`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescriptionBox = styled.article`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 30px;
`;

export const Hr = styled.hr`
  width: 100%;
  min-height: 1px;
  max-height: 1px;
  margin: 20px 0px;
  border: none;
  background-color: #e1e2e4;
`;

export const DescriptionTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

export const DescriptionSubTitle = styled.h3`
  fontsize: 18px;
  color: #666;
  margin-top: 10px;
`;

export const ShortcutsButton = styled.button`
  color: #36f;
  font-size: 16px;
  font-weight: bold;
  background: none;
  border: 0px;
  cursor: pointer;
`;
