import { useNavigate } from "react-router-dom";
import { Recruit } from "../../../types/recruit/types";
import * as S from "./style";

interface Props extends Recruit {}

const RecentRecruitItem = (data: Props) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/${data.id}`)}>
      <S.RecruitImage src={data.image} alt={`${data.companyName} img`} />
      <S.DescriptionBox>
        <S.CompanyName>{data.companyName}</S.CompanyName>
        <S.EtcContent>{data.etc}</S.EtcContent>
      </S.DescriptionBox>
    </S.Container>
  );
};

export default RecentRecruitItem;
