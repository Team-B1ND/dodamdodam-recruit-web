import { ellipsisLine } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";

export const Container = styled.div`
  width: 245px;
  height: 275px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const RecruitImg = styled.img`
  width: 100%;
  height: 168px;

  object-fit: contain;
  border: 1px solid #e4e3e7;
  border-radius: 12px;
`;

export const CompanyName = styled.h3`
  font-size: 14px;
  color: #323438;

  margin: 15px 0px 7px 2px; /*top right bottom left */
`;

export const Job = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 2px;
`;

export const EtcContent = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #666;
  margin-top: 10px;
  ${ellipsisLine(3)}
`;

export const Writer = styled.p`
  font-size: 12px;
  color: #999;

  margin-top: 10px;
  margin-left: 2px;
`;
