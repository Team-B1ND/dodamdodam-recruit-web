import RecruitItem from "../RecruitItem";
import * as S from "./style";
import List from "../../common/List";
import { recruitList } from "../../../types/recruit/types";
import { LAYOUT_WIDTH } from "../../common/Layout/constant";
import { useGetRecruitListQuery } from "../../../queries/recruit/queries";

const RecruitList = () => {
  const { data } = useGetRecruitListQuery(1, { suspense: true });

  // const { ref, inView } = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage();
  //   }
  // }, [inView]);

  return (
    <>
      <S.Container>
        {data?.data.recruitList.length ? (
          <List
            customStyle={{ width: LAYOUT_WIDTH, gap: 20, marginTop: 10 }}
            articles={data.data.recruitList.map((recruit) => recruit)}
            renderListItem={(article: recruitList) => (
              <RecruitItem {...article} />
            )}
          />
        ) : (
          <S.EmptyWrap>
            <S.EmptyWrap>현재 채용공고가 존재하지 않아요 😭</S.EmptyWrap>
          </S.EmptyWrap>
        )}
      </S.Container>
      {/* <S.SeeMoreWrap ref={ref}>더보기</S.SeeMoreWrap> */}
    </>
  );
};

export default RecruitList;
