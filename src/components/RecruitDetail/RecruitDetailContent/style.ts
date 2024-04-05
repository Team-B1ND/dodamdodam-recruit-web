import styled from "styled-components";

export const AlertBox = styled.div`
  width: 100%;
  height: 94px;
  background-color: #f3f5f8;
  border-radius: 5px;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  column-gap: 20px;

  margin-top: 20px;
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

export const CompanyContainer = styled.div``;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;
`;

export const CompanyImg = styled.img`
  width: 1000px;
  height: 350px;

  border-radius: 10px;

  user-select: none;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;

  margin: 40px 0px 20px 0px;
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CompanyInfoBox = styled.div`
  width: 700px;
`;

export const PdfDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 200px;

  background-color: #f3f5f8;
  border-radius: 10px;

  margin-bottom: 15px;
`;

export const CompanyName = styled.div`
  font-size: 33px;
  font-weight: 700;

  margin-bottom: 30px;
`;

export const Line = styled.div<{ isWidth: number }>`
  border-bottom: 1px solid #dddddd;

  width: ${(props) => props.isWidth}%;
`;

export const CompanyInfo = styled.div`
  margin: 30px 0px 30px 0px;
`;

export const RecruitmentInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
`;

export const Info = styled.div`
  font-size: 17px;
  font-weight: 500;

  color: rgba(46, 47, 51, 0.88);
`;

export const EtcBox = styled.div`
  width: 85%;
  height: auto;

  font-size: 16px;
  font-weight: 400;
`;

export const PdfBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  cursor: pointer;
`;

export const Pdf = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  background-color: white;
  height: 50px;

  width: 250px;

  border-radius: 20px;

  margin-bottom: 10px;

  text-decoration-line: none;
  color: black;
`;

export const PdfTitle = styled.p`
  margin-top: 12px;
`;

export const InquiryBox = styled.div`
  width: 300px;
  height: 50px;

  background-color: #2f56ef;

  border-radius: 10px;

  margin-bottom: 15px;
`;
export const Inquiry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: bold;

  height: 100%;
`;

export const MapBox = styled.div`
  margin-bottom: 20px;
`;
