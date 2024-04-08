import * as S from "./style";
import { FiAlertCircle } from "@react-icons/all-files/fi/FiAlertCircle";
import { RiComputerFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { GetRecruitResponese } from "../../../repositories/recruit/RecruitRepository";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useMap } from "../../../hooks/useMap";
import { useEffect } from "react";

interface Props extends GetRecruitResponese {}

const RecruitDetailContent = (data: Props) => {
  const { SetSearchAddress, searchAddress, SearchMap, state } = useMap();

  useEffect(() => {
    SetSearchAddress(data.data.location);
    SearchMap();
  }, [searchAddress]);

  return (
    <S.CompanyContainer>
      <S.ImageContainer>
        <S.CompanyImg src={data?.data.image} />
      </S.ImageContainer>
      <S.CompanyInfoContainer>
        <S.CompanyInfoBox>
          <S.CompanyName>{data?.data.name}</S.CompanyName>
          <S.Line isWidth={85} />
          <S.CompanyInfo>
            <S.RecruitmentInfo>
              <RiComputerFill size={24} color="rgb(0, 103, 188)" />
              &nbsp; &nbsp;
              <S.SubTitle>직무</S.SubTitle>
              &nbsp; &nbsp; &nbsp;
              <S.Info>{data?.data.duty}</S.Info>
            </S.RecruitmentInfo>
            <S.RecruitmentInfo>
              <IoPerson size={24} color="rgb(0, 103, 188)" />
              &nbsp; &nbsp;
              <S.SubTitle>채용인원</S.SubTitle>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <S.Info>{data?.data.personnel}명</S.Info>
            </S.RecruitmentInfo>
          </S.CompanyInfo>
          <S.Line isWidth={85} />
          <S.Title>추가 사항</S.Title>
          <S.EtcBox>{data?.data.etc}</S.EtcBox>
          <S.Title>회사 위치</S.Title>
          <S.MapBox>
            <Map
              center={state.center}
              style={{
                width: "600px",
                height: "260px",
                borderRadius: "10px",
                border: "0.5px solid #E8E8EA",
              }}
              level={3}
            >
              <MapMarker position={state.center}></MapMarker>
            </Map>
            <S.MapList>{data.data.location}</S.MapList>
          </S.MapBox>
        </S.CompanyInfoBox>

        <div>
          <S.InquiryBox>
            <S.Inquiry>{data.data.writer}&nbsp;선생님께 문의하기</S.Inquiry>
          </S.InquiryBox>
          <S.PdfDataBox>
            <S.PdfTitle>{data?.data.name}</S.PdfTitle>
            <S.PdfBox>
              {data?.data.pdfs.map((pdf) => (
                <S.Pdf target="_blank" href={pdf.url} rel="noopener">
                  {pdf.name}
                </S.Pdf>
              ))}
            </S.PdfBox>
          </S.PdfDataBox>
        </div>
      </S.CompanyInfoContainer>

      <S.Line isWidth={60} />

      <S.AlertBox>
        <S.AlertIcon>
          <FiAlertCircle />
        </S.AlertIcon>
        <S.AlertBoxContent>
          본 채용정보는 대구소프트웨어마이스터고등학교 동의없이 무단전재,
          재배포, 재가공할 수 없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
        </S.AlertBoxContent>
      </S.AlertBox>
    </S.CompanyContainer>
  );
};

export default RecruitDetailContent;
