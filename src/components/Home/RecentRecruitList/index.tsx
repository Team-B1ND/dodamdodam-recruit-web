import { useGetRecentRecruits } from "../../../queries/recruit/queries";
import RecentRecruitItem from "../RecentRecruitItem";
import * as S from "./style";

const RecentRecruitList = () => {
  const { data } = useGetRecentRecruits({ suspense: true });

  return (
    <S.Container>
      <S.Wrap>
        {data?.data.map((item) => (
          <RecentRecruitItem {...item} key={item.id} />
        ))}
      </S.Wrap>
    </S.Container>
  );
};

export default RecentRecruitList;
