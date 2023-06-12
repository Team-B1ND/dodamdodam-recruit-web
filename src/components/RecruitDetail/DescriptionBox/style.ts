import styled from "styled-components";
import { palette } from "../../../styles/palette";
import { ellipsisLine } from "@b1nd/b1nd-styled-components-util";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #f0eff2;
  border-radius: 5px;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const SubTitle = styled.h4`
  font-size: 15px;
  color: #666;
  margin-top: 24px;
`;

export const Writer = styled.span`
  font-size: 15px;
  margin-top: 10px;
`;

export const EtcContent = styled.p`
  color: #666;
  font-size: 15px;
  ${ellipsisLine(3)}
  line-height : 18px;
  margin: auto 0px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${palette.main};
  border-radius: 30px;
  cursor: pointer;
  border: 0px;
  font-size: 16px;
  color: white;
`;
