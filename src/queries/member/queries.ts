import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import MemberRepositoryImpl from "../../repositories/member/MemberRepositoryImpl";

export const useGetMyMemberQuery = () =>
  useQuery([QUERY_KEYS.member.getMyMember], MemberRepositoryImpl.getMyMember);
