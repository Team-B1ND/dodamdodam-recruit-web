import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import RecruitRepositoryImpl from "../../repositories/recruit/RecruitRepositoryImpl";
import {
  GetRecentRecruitsResponse,
  GetRecruitParam,
  GetRecruitResponse,
  GetRecruitsByPageResponse,
} from "../../repositories/recruit/RecruitRepository";
import { AxiosError } from "axios";

export const useGetRecruitsByPageQuery = (
  options?: UseInfiniteQueryOptions<
    GetRecruitsByPageResponse,
    AxiosError,
    GetRecruitsByPageResponse,
    GetRecruitsByPageResponse,
    [string]
  >
) =>
  useInfiniteQuery(
    [QUERY_KEYS.recruit.getRecruitsByPage],
    ({ pageParam = 1 }) =>
      RecruitRepositoryImpl.getRecruitsByPage({ page: pageParam }),
    {
      getNextPageParam: (nextPage) => {
        return nextPage.data.nextPage || undefined;
      },
      staleTime: Infinity,
      ...options,
    }
  );

export const useGetRecentRecruitsQuery = (
  options?: UseQueryOptions<
    GetRecentRecruitsResponse,
    AxiosError,
    GetRecentRecruitsResponse,
    [string]
  >
) =>
  useQuery(
    [QUERY_KEYS.recruit.getRecentRecruits],
    RecruitRepositoryImpl.getRecentRecruits,
    {
      ...options,
    }
  );

export const useGetRecruitQuery = (
  { id }: GetRecruitParam,
  options?: UseQueryOptions<
    GetRecruitResponse,
    AxiosError,
    GetRecruitResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.recruit.getRecruit(id),
    () => RecruitRepositoryImpl.getRecruit({ id }),
    { ...options }
  );
