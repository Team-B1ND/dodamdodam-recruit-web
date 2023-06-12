import { Recruit } from "../../types/recruit/types";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruitsByPage({
    page,
  }: GetRecruitsByPageParam): Promise<GetRecruitsByPageResponse>;

  getRecentRecruits(): Promise<GetRecentRecruitsResponse>;

  getRecruit({ id }: GetRecruitParam): Promise<GetRecruitResponse>;
}

export interface GetRecruitsByPageParam {
  page: number;
}

export interface GetRecruitsByPageResponse extends Response {
  data: {
    nextPage: number;
    recruit: Recruit[];
  };
}

export interface GetRecentRecruitsResponse extends Response {
  data: Recruit[];
}

export interface GetRecruitParam {
  id: number;
}

export interface GetRecruitResponse extends Response {
  data: Recruit;
}
