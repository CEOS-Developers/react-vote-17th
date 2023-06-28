import { POST } from "../utils/axios";

export const onLogin = async (body: any) => await POST("/account/login/", body);

export const onSignUp = async (body: any) =>
  await POST("/account/signup/", body);

export const onVoteCandidate = async (url: string, body: any, params?: any) =>
  await POST(`/vote/candidate/${url}/`, body, params);

export const onVoteTeam = async (body: any, params?: any) =>
  await POST("/vote/team/", body, params);
