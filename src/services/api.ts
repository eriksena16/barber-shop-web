import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import https from "https";

import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "@/context/AuthContext";

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false, // IGNORA SSL inválido
    }),
    headers: {
      Authorization: `Bearer ${cookies["@barber.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window !== undefined) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
