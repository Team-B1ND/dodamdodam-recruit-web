export const QUERY_KEYS = Object.freeze({
  member: {
    getMyMember: "member/getMyMember",
  },
  recruit: {
    getRecruitsByPage: (page: number, size: number) => ["recruit", page, size],

    getRecentRecruits: "recruit/getRecentRecruits",
    getRecruit: (id: number) => ["recruit/getRecruit", id],
  },
});
