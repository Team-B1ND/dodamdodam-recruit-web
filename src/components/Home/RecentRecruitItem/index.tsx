import { useNavigate } from "react-router-dom";
import { recruitList } from "../../../types/recruit/types";
import * as S from "./style";

interface Props extends recruitList {}

const RecentRecruitItem = (data: Props) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/${data.id}`)}>
      <S.RecruitImage src={data.image} alt={`${data.name} img`} />
      <S.DescriptionBox>
        <S.CompanyName>{data.name}</S.CompanyName>
        <S.EtcContent>{data.duty}</S.EtcContent>
      </S.DescriptionBox>
    </S.Container>
  );
};

export default RecentRecruitItem;
