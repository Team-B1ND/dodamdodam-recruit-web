import { useNavigate } from "react-router-dom";
import { recruitList } from "../../../types/recruit/types";
import * as S from "./style";

interface Props extends recruitList {}

const RecruitItem = (data: Props) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/${data.id}`)}>
      <S.RecruitImg src={data.image} alt={`${data.name} img`} />
      <S.CompanyName>{data.name}</S.CompanyName>
      <S.Writer>{data.writer}</S.Writer>
    </S.Container>
  );
};

export default RecruitItem;
