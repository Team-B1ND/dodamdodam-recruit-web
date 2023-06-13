import { CommonComponentProps } from "../common.type";

export interface ListProps<T> extends Omit<CommonComponentProps, "children"> {
  articles: T[];
  renderListItem: (articles: T) => JSX.Element;
}
