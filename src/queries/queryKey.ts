export const QUERY_KEYS = Object.freeze({
  member: {
    getMyMember: "member/getMyMember",
  },
  recruit: {
    getRecruitsByPage: (page: number) => ["recruit", page],
    getRecentRecruits: "recruit/getRecentRecruits",
    getRecruit: (id: number) => ["recruit/getRecruit", id],
  },
});
