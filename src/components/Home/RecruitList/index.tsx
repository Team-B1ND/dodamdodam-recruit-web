import { useEffect } from "react";
import { useGetRecruitsByPageQuery } from "../../../queries/recruit/queries";
import { useInView } from "react-intersection-observer";
import RecruitItem from "../RecruitItem";
import * as S from "./style";

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
        <S.Wrap>
          {data?.pages.map((page) =>
            page.data.recruit.map((recruit) => (
              <RecruitItem {...recruit} key={recruit.id} />
            ))
          )}
        </S.Wrap>
      </S.Container>
      <S.SeeMoreWrap ref={ref}>더보기</S.SeeMoreWrap>
    </>
  );
};

export default RecruitList;
