import { Recruit } from "../../types/recruit/types";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruitsByPage({
    page,
  }: GetRecruitsByPageParam): Promise<GetRecruitsByPageResponse>;

  getRecentRecruits() : Promise<GetRecentRecruitsResponse>;
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
