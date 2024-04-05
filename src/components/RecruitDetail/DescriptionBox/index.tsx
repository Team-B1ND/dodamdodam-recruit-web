import { GetRecruitResponese } from "../../../repositories/recruit/RecruitRepository";
import * as S from "./style";

interface Props extends GetRecruitResponese {}

const DescriptionBox = (data: Props) => {
  return (
    <S.Container>
      <S.CompanyName>{data.data.name}</S.CompanyName>
      <S.SubTitle>작성자</S.SubTitle>
      <S.Writer>{data.data.writer}</S.Writer>
      <S.EtcContent>{data.data.etc}</S.EtcContent>
      <S.SubmitButton>{data.data.writer}쌤한테 문의하기</S.SubmitButton>
    </S.Container>
  );
};

export default DescriptionBox;
