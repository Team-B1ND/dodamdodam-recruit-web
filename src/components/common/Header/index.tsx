import * as S from "./style";
import Logo from "../../../assets/logo/logo.svg";
import { useGetMyMemberQuery } from "../../../queries/member/queries";
import DefaultProfileImg from "../../../assets/images/defaultProfile.png";
import useLogout from "../../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { data } = useGetMyMemberQuery();
  const { onLogout } = useLogout();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap>
          <S.Logo
            src={Logo}
            alt="dodam recruit logo"
            onClick={() => navigate("/")}
          />
          <S.LogoText>리크루트</S.LogoText>
        </S.LogoWrap>
        <S.AvatarWrap>
          <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
        </S.AvatarWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
