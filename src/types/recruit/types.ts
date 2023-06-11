import { Member } from "../member/types";

export interface Recruit {
  readonly id: number;
  writer: Member;
  image: string;
  etc: string;
  viewCount: number;
  createdDate: string;
  companyName: string;
}
