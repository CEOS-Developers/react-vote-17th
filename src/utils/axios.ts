import axios from "axios";

const fetchWrap = async ({ method, url, body, params }: any) => {
  const config = {
    baseURL: process.env.REACT_APP_APIURL,
    // withCredentials: "true",
    headers: {
      Authentication:
        typeof localStorage.getItem("accessToken") === "undefined"
          ? null
          : `Bearer ${localStorage.getItem("accessToken")}`,
    },
    ...params,
  };

  try {
    const { data } =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "put" && (await axios.put(url, body, config))) ||
      (method === "patch" && (await axios.patch(url, body, config))) ||
      (method === "delete" && (await axios.delete(url, config))) ||
      {};

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GET = (url: string, params: any) =>
  fetchWrap({ method: "get", url, params });

export const POST = (url: string, body: any, params?: any) =>
  fetchWrap({ method: "post", url, body, params });

export const PUT = (url: string, body: any, params: any) =>
  fetchWrap({ method: "put", url, body, params });

export const PATCH = (url: string, body: any, params: any) =>
  fetchWrap({ method: "patch", url, body, params });

export const DELETE = (url: string) => fetchWrap({ method: "delete", url });
