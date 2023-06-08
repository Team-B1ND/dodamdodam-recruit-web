export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: MemberRole;
  readonly status: MemberStatus;
}

export interface ClassRoom {
  readonly grade: number;
  readonly id: number;
  readonly placeId: number;
  readonly room: number;
}

export type MemberRole = "STUDENT" | "TEACHER" | "ADMIN";

export type MemberStatus = "ACTIVE" | "DEACTIVATED";
