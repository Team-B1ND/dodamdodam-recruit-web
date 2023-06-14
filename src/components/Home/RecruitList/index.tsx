import { useEffect } from "react";
import { useGetRecruitsByPageQuery } from "../../../queries/recruit/queries";
import { useInView } from "react-intersection-observer";
import RecruitItem from "../RecruitItem";
import * as S from "./style";
import List from "../../common/List";
import { Recruit } from "../../../types/recruit/types";
import { LAYOUT_WIDTH } from "../../common/Layout/constant";

const RecruitList = () => {
  const { data, fetchNextPage } = useGetRecruitsByPageQuery({ suspense: true });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <S.Container>
        {data?.pages.map((page) =>
          page.data.recruit.map((recruit) => recruit).flat(1).length === 0 ? (
            <S.EmptyWrap>현재 채용공고가 존재하지 않아요 😭</S.EmptyWrap>
          ) : (
            <List
              customStyle={{ width: LAYOUT_WIDTH, gap: 20, marginTop: 10 }}
              articles={data!.pages
                .map((page) => page.data.recruit.map((recruit) => recruit))
                .flat(1)}
              renderListItem={(article: Recruit) => (
                <RecruitItem {...article} key={article.id} />
              )}
            />
          )
        )}
      </S.Container>
      <S.SeeMoreWrap ref={ref}>더보기</S.SeeMoreWrap>
    </>
  );
};

export default RecruitList;
