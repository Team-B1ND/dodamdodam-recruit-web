import { useGetRecruitListQuery } from "../../../queries/recruit/queries";
import { recruitList } from "../../../types/recruit/types";
import { LAYOUT_WIDTH } from "../../common/Layout/constant";
import List from "../../common/List";
import RecentRecruitItem from "../RecentRecruitItem";
import * as S from "./style";

const RecentRecruitList = () => {
  const { data } = useGetRecruitListQuery(1, { suspense: true });

  return (
    <S.Container>
      {data?.data.recruitList.length ? (
        <List
          customStyle={{ width: LAYOUT_WIDTH, gap: 20, marginTop: 10 }}
          articles={data.data.recruitList.map((recruit) => recruit)}
          renderListItem={(article: recruitList) => (
            <RecentRecruitItem {...article} />
          )}
        />
      ) : (
        <S.EmptyWrap>
          <S.EmptyWrap>현재 채용공고가 존재하지 않아요 😭</S.EmptyWrap>
        </S.EmptyWrap>
      )}
    </S.Container>
  );
};

export default RecentRecruitList;
