import styled from "styled-components";
import { fontSize } from "../../../styles/fontSize";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const Wrap = styled.div`
  width: 1040px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 5px;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: scale-down;
  cursor: pointer;
`;

export const LogoText = styled.p`
  font-size: ${fontSize.SMALL};
  color: black;
  font-weight: bold;
`;

export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 100%;
  border: 1px solid #f0eff2;
  padding: 1px;
`;

export const LogoutButton = styled.button`
  width: 80px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid #f0eff2;
  background-color: white;
  color: #666;
  cursor: pointer;
`;
