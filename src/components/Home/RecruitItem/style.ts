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

  object-fit: cover;
  border: 1px solid #f0eff2;
  border-radius: 12px;
`;

export const CompanyName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const EtcContent = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #666;
  margin-top: 10px;
  ${ellipsisLine(3)}
`;

export const Writer = styled.p`
  font-size: 16px;
  color: #999;
  margin-top: 10px;
`;
