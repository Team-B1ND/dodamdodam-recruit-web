import styled from "styled-components";

export const Container = styled.div`
  min-width: 660px;
  display: flex;
  flex-direction: column;
`;


export const RecruitImage = styled.img`
  width: 100%;
`;

export const CompanyName = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin: 30px 0px;
`;

export const EtcContent = styled.pre`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  white-space: pre-wrap;
`;



export const Hr = styled.hr`
  width: 100%;
  min-height: 1px;
  max-height: 1px;
  border: none;
  background-color: #e1e2e4;
  margin: 20px 0px;
`;

export const AlertBox = styled.div`
  width: 100%;
  height: 94px;
  background-color: #f3f5f8;
  border-radius: 5px;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const AlertIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertBoxContent = styled.p`
  line-height: 22px;
  font-size: 12px;
`;
