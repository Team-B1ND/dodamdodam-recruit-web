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

export const useGetRecentRecruits = (
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
