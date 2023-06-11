import { ellipsisLine } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";

export const Container = styled.div`
  width: 192px;
  height: 250px;
  border: 1px solid #f0eff2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
`;

export const RecruitImage = styled.img`
  width: 100%;
  height: 54%;
  object-fit: cover;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  padding: 0px 20px;
  background-color: #292c33;
`;

export const CompanyName = styled.h3`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

export const EtcContent = styled.p`
  font-size: 14px;
  color: #666;
  ${ellipsisLine(1)}
`;
