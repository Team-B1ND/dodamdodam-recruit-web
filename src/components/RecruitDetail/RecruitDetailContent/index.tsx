import { Recruit } from "../../../types/recruit/types";
import * as S from "./style";
import { FiAlertCircle } from "@react-icons/all-files/fi/FiAlertCircle";

interface Props extends Recruit {}

const RecruitDetailContent = (data: Props) => {
  return (
    <S.Container>
      <S.RecruitImage src={data?.image} alt={`${data?.companyName} img`} />
      <S.CompanyName>{data?.companyName}</S.CompanyName>
      <S.EtcContent>{data?.etc}</S.EtcContent>
      <S.Hr />
      <S.AlertBox>
        <S.AlertIcon>
          <FiAlertCircle />
        </S.AlertIcon>
        <S.AlertBoxContent>
          본 채용정보는 대구소프트웨어마이스터고등학교 동의없이 무단전재,
          재배포, 재가공할 수 없으며, 구직활동 이외의 용도로 사용할 수 없습니다.
        </S.AlertBoxContent>
      </S.AlertBox>
    </S.Container>
  );
};

export default RecruitDetailContent;
