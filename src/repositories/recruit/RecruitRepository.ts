import { recruitList } from "../../types/recruit/types";
import { Response } from "../../types/util/response.type";

export interface RecruitRepository {
  getRecruitList(page: number): Promise<GetRecruitsByPageResponse>;
  getRecruit({ id }: GetRecruitParam): Promise<GetRecruitResponese>;
}

export interface GetRecruitsByPageParam {
  page: number;
}

export interface GetRecruitsByPageResponse extends Response {
  data: {
    recruitList: [
      {
        id: number;
        writer: string;
        name: string;
        location: string;
        duty: string;
        etc: string;
        personnel: number;
        image: string;
      }
    ];
    nextPage: null;
  };
}

export interface GetRecruitResponese extends Response {
  data: {
    writer: string;
    name: string;
    location: string;
    duty: string;
    etc: string;
    personnel: number;
    image: string;
    pdfs: RecruitPdfParam[];
  };
}

export interface RecruitPdfParam {
  url: string;
  name: string;
}

export interface GetRecentRecruitsResponse extends Response {
  data: recruitList[];
}

export interface GetRecruitParam {
  id: number;
}

// export interface GetRecruitResponse extends Response {
//   data: recruitList;
// }
