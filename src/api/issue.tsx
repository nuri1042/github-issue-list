import instance from ".";

export const getIssueListApi = async (
  owner: string,
  repo: string,
  page: number = 1
) => {
  const response = await instance.get(`/repos/${owner}/${repo}/issues`, {
    params: {
      state: "open",
      sort: "comments",
      page: page,
      per_page: 30,
    },
  });
  return response.data;
};

export const getIssueDetailsApi = async (
  owner: string,
  repo: string,
  number: string
) => {
  const response = await instance.get(
    `/repos/${owner}/${repo}/issues/${number}`
  );
  return response.data;
};
