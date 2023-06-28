import { POST } from "../utils/axios";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export const onLogin = async (body: any) => await POST("/account/login/", body);

export const onSignUp = async (body: any) =>
  await POST(`${PROXY}/account/signup/`, body);

export const onVoteCandidate = async (url: string, body: any, params?: any) =>
  await POST(`${PROXY}/vote/candidate/${url}/`, body, params);

export const onVoteTeam = async (body: any, params?: any) =>
  await POST(`${PROXY}/vote/team/`, body, params);
