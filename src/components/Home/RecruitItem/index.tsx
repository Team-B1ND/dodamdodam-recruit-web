import { useNavigate } from "react-router-dom";
import { Recruit } from "../../../types/recruit/types";
import * as S from "./style";

interface Props extends Recruit {}

const RecruitItem = (data: Props) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/${data.id}`)}>
      <S.RecruitImg src={data.image} alt={`${data.companyName} img`} />
      <S.CompanyName>{data.companyName}</S.CompanyName>
      <S.EtcContent>{data.etc}</S.EtcContent>
      <S.Writer>{data.writer.name}</S.Writer>
    </S.Container>
  );
};

export default RecruitItem;
