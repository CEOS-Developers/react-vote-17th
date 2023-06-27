import { POST } from "../utils/axios";

export const onLogin = async (body: any) => await POST("/account/login/", body);

export const onSignUp = async (body: any) =>
  await POST("/account/signup/", body);

export const onVoteTeam = async (body: any, params?: any) =>
  await POST("/vote/team/", body, params);
