import * as S from "./style";
import Logo from "../../../assets/logo/logo.svg";
import { useGetMyMemberQuery } from "../../../queries/member/queries";
import DefaultProfileImg from "../../../assets/images/defaultProfile.png";
import useLogout from "../../../hooks/useLogout";

const Header = () => {
  const { data } = useGetMyMemberQuery();
  const { onLogout } = useLogout();

  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap>
          <S.Logo
            src={Logo}
            alt="dodam recruit logo"
            onClick={() => (window.location.href = "https://dodam.b1nd.com/")}
          />
          <S.LogoText>리크루트</S.LogoText>
        </S.LogoWrap>
        <S.AvatarWrap>
          <S.Avatar src={data?.data.member.profileImage || DefaultProfileImg} />
          <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
        </S.AvatarWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
