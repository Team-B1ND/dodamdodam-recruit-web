export const QUERY_KEYS = Object.freeze({
  member: {
    getMyMember: "member/getMyMember",
  },
  recruit: {
    getRecruits: "recruit/getRecruits",
    getRecruit: (id: number) => ["recruit/getRecruit", id],
  },
});
