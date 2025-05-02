import {
  SignInProps,
  SignUpProps,
  LoginResponse,
  ApiResponse,
} from "../types/AuthTypes";
import { api } from "../services/apiClient";

import {LOGIN_USER, POST_USER} from "../routes/routes"

export function handleApiResponse<T>(response: { data: ApiResponse<T> }) {
  if (!response.data.success) {
    throw new Error(response.data.errors?.join(", ") || "Unknown error");
  }
  return response.data.data as T;
}


export async function  login(credentials: SignInProps): Promise<LoginResponse> {
    const response = await api.post(LOGIN_USER, credentials);
    return handleApiResponse<LoginResponse>(response);
}

export async function register(credentials : SignUpProps): Promise<void> {
    await api.post(POST_USER, credentials);    
}