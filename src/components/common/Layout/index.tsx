import Header from "../Header";
import * as S from "./style";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Wrap>{children}</S.Wrap>
    </S.Container>
  );
};

export default Layout;
