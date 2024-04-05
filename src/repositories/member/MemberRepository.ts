import {
  MemberRole,
  MemberStatus,
  Student,
  Teacher,
} from "../../types/member/types";
import { Response } from "../../types/util/response.type";

export interface MemberRepository {
  getMyMember(): Promise<GetMyMemberResponse>;
}

export interface GetMyMemberResponse extends Response {
  data: {
    id: string;
    name: string;
    email: string;
    role: MemberRole;
    status: MemberStatus;
    profileImage: string;
    phone: string;
    student: Student;
    teacher: Teacher;
    createdAt: string;
    modifiedAt: string;
  };
}
