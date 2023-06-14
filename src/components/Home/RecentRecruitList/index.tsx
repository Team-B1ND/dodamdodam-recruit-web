import { useGetRecentRecruitsQuery } from "../../../queries/recruit/queries";
import { Recruit } from "../../../types/recruit/types";
import { LAYOUT_WIDTH } from "../../common/Layout/constant";
import List from "../../common/List";
import RecentRecruitItem from "../RecentRecruitItem";
import * as S from "./style";

const RecentRecruitList = () => {
  const { data } = useGetRecentRecruitsQuery({ suspense: true });

  return (
    <S.Container>
      {data?.data.length === 0 ? (
        <S.EmptyWrap>
          <S.EmptyWrap>현재 채용공고가 존재하지 않아요 😭</S.EmptyWrap>
        </S.EmptyWrap>
      ) : (
        <List
          articles={data!.data.map((item) => item)}
          renderListItem={(article: Recruit) => (
            <RecentRecruitItem {...article} key={article.id} />
          )}
          customStyle={{ width: LAYOUT_WIDTH, columnGap: 20 }}
        />
      )}
    </S.Container>
  );
};

export default RecentRecruitList;
