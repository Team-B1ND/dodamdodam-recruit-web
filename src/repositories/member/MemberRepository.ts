import { ClassRoom, Member } from "../../types/member/types";
import { Response } from "../../types/util/response.type";

export interface MemberRepository {
  getMyMember(): Promise<GetMyMemberResponse>;
}

export interface GetMyMemberResponse extends Response {
  data: {
    classroom: ClassRoom;
    id: number;
    member: Member;
    number: number;
    phone: string;
  };
}
