import { Params, useParams } from "react-router-dom";
import { useGetRecruitQuery } from "../../queries/recruit/queries";
import * as S from "./style";
import { Suspense } from "react";
import RecentRecruitList from "../Home/RecentRecruitList";
import Section from "../common/Section";
import { LAYOUT_WIDTH } from "../common/Layout/constant";
import { useGetMyMemberQuery } from "../../queries/member/queries";
import RecruitDetailContent from "./RecruitDetailContent";
import DescriptionBox from "./DescriptionBox";

const RecruitDetail = () => {
  const { data } = useGetMyMemberQuery();

  return (
    <S.Container>
      <Suspense fallback={<>로딩중...</>}>
        <RecruitDetailWrap />
      </Suspense>
      <Section width={LAYOUT_WIDTH}>
        <Section.Title>최근 채용 중인 회사</Section.Title>
        <Section.SubTitle>
          {data?.data.member.name}님, 최근에 올라온 공고에요!
        </Section.SubTitle>
        <Suspense fallback={<>로딩중...</>}>
          <RecentRecruitList />
        </Suspense>
      </Section>
    </S.Container>
  );
};

const RecruitDetailWrap = () => {
  const { id }: Readonly<Params<"id">> = useParams();
  const { data } = useGetRecruitQuery({ id: Number(id) }, { suspense: true });

  return (
    <S.Wrap>
      <RecruitDetailContent {...data!.data} />
      <DescriptionBox {...data!.data} />
    </S.Wrap>
  );
};

export default RecruitDetail;
