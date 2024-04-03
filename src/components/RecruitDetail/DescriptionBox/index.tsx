import { recruitList } from "../../../types/recruit/types";
import * as S from "./style";

interface Props extends recruitList {}

const DescriptionBox = (data: Props) => {
  return (
    <S.Container>
      {/* <S.CompanyName>{data.companyName}</S.CompanyName>
      <S.SubTitle>작성자</S.SubTitle>
      <S.Writer>{data.writer.name}</S.Writer>
      <S.EtcContent>{data.etc}</S.EtcContent>
      <S.SubmitButton>{data.writer.name}쌤한테 문의하기</S.SubmitButton> */}
    </S.Container>
  );
};

export default DescriptionBox;
