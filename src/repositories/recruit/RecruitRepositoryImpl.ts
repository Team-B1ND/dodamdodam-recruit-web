import { customAxios } from "../../libs/axios/customAxios";
import {
  GetRecentRecruitsResponse,
  GetRecruitsByPageParam,
  GetRecruitsByPageResponse,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruitsByPage({
    page,
  }: GetRecruitsByPageParam): Promise<GetRecruitsByPageResponse> {
    const { data } = await customAxios.get(`/recruit?page=${page}`);

    return data;
  }

  public async getRecentRecruits(): Promise<GetRecentRecruitsResponse> {
    const { data } = await customAxios.get("/recruit/recent");

    return data;
  }
}

export default new RecruitRepositoryImpl();
