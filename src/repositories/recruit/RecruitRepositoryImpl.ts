import { customAxios } from "../../libs/axios/customAxios";
import {
  GetRecentRecruitsResponse,
  GetRecruitParam,
  GetRecruitResponse,
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

  public async getRecruit({
    id,
  }: GetRecruitParam): Promise<GetRecruitResponse> {
    const { data } = await customAxios.get(`/recruit/${id}`);
    return data;
  }
}

export default new RecruitRepositoryImpl();
