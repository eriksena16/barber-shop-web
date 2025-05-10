import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import https from 'https';
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "@/context/AuthContext";


export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

 const isDev = process.env.NODE_ENV !== 'production';

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${cookies['@barber.token']}`
    },
    // ⚠️ Ignora certificados inválidos só em dev
    httpsAgent: isDev ? new https.Agent({ rejectUnauthorized: false }) : undefined,
  });

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response?.status === 401) {
            if (typeof window !== undefined) {
                signOut();
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error);
    })

    return api;

}