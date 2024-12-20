import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import RecruitRepositoryImpl from "../../repositories/recruit/RecruitRepositoryImpl";
import {
  GetRecruitParam,
  GetRecruitResponese,
  GetRecruitsByPageResponse,
} from "../../repositories/recruit/RecruitRepository";
import { AxiosError } from "axios";

export const useGetRecruitListQuery = (
  page: number,
  size: number,
  options?: UseQueryOptions<
    GetRecruitsByPageResponse,
    AxiosError,
    GetRecruitsByPageResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.recruit.getRecruitsByPage(page, size),
    () => RecruitRepositoryImpl.getRecruitList(page, size),

    {
      ...options,
    }
  );

export const useGetRecruitQuery = (
  { id }: GetRecruitParam,
  options?: UseQueryOptions<
    GetRecruitResponese,
    AxiosError,
    GetRecruitResponese,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.recruit.getRecruit(id),
    () => RecruitRepositoryImpl.getRecruit({ id }),
    { ...options }
  );
