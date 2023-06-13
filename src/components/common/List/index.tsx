import { ListProps } from "./types";
import * as S from "./style";

const List = <T extends {}>({
  articles,
  renderListItem,
  customStyle,
}: ListProps<T>) => {
  return (
    <S.Container customStyle={customStyle}>
      {articles.map((item) => renderListItem(item))}
    </S.Container>
  );
};

export default List;
