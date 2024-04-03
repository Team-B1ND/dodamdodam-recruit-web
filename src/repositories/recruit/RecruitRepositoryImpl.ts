import { customAxios } from "../../libs/axios/customAxios";
import {
  GetRecruitParam,
  GetRecruitResponse,
  GetRecruitsByPageResponse,
  RecruitRepository,
} from "./RecruitRepository";

class RecruitRepositoryImpl implements RecruitRepository {
  public async getRecruitList(
    page: number
  ): Promise<GetRecruitsByPageResponse> {
    const { data } = await customAxios.get(`/recruit?page=${page}`);
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
