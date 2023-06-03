import { POST } from "../utils/axios";

export const onLogin = async (body: any) => await POST("/login", body);

export const onSignUp = async (body: any) => await POST("/signup", body);
