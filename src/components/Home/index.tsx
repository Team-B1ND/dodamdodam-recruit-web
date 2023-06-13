import { Suspense } from "react";
import RecruitList from "./RecruitList";
import * as S from "./style";
import RecentRecruitList from "./RecentRecruitList";
import Section from "../common/Section";
import { LAYOUT_WIDTH } from "../common/Layout/constant";

const Home = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Banner>
          <S.BannerImg
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2031%2F34643cf5.jpg&w=1060&q=100"
            alt="banner img"
          />
          <S.DescriptionBox>
            <S.DescriptionTitle>도담도담 취업공고</S.DescriptionTitle>
            <S.DescriptionSubTitle>
              학교로 올라온 취업 공고를 확인해보세요
            </S.DescriptionSubTitle>
            <S.Hr />
            <S.ShortcutsButton>바로가기 &gt;</S.ShortcutsButton>
          </S.DescriptionBox>
        </S.Banner>
      </S.Wrap>
      <Section width={LAYOUT_WIDTH}>
        <Section.Title>최근 채용 중인 회사</Section.Title>
        <Suspense fallback={<>로딩중...</>}>
          <RecentRecruitList />
        </Suspense>
      </Section>
      <Section width={LAYOUT_WIDTH}>
        <Section.Title>현재 채용 중인 회사</Section.Title>
        <Suspense fallback={<>로딩중...</>}>
          <RecruitList />
        </Suspense>
      </Section>
    </S.Container>
  );
};

export default Home;
