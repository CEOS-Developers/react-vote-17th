import { GET } from "../utils/axios";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export const onCheckPartResult = async (params: any, url: string) =>
  await GET(`${PROXY}/vote/candidate/${url}`, params);

export const onCheckTeamResult = async (params: any) =>
  await GET(`${PROXY}/vote/team/`, params);
