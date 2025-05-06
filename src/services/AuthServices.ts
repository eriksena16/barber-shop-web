import {
  SignInProps,
  SignUpProps,
  LoginResponse,
  ApiResponse,
  UserProps,
} from "@/types/AuthTypes";
import { api } from "@/services/apiClient";

import { GET_USER, LOGIN_USER, POST_USER } from "../routes/routes";

export function handleApiResponse<T>(response: { data: ApiResponse<T> }) {
  if (!response.data.success) {
    throw new Error(response.data.errors?.join(", ") || "Unknown error");
  }
  return response.data.data as T;
}

export async function login(credentials: SignInProps): Promise<LoginResponse> {
  const response = await api.post(LOGIN_USER, credentials);
  return handleApiResponse<LoginResponse>(response);
}

export async function register(credentials: SignUpProps): Promise<void> {
  await api.post(POST_USER, credentials);
}

export async function getUserData(): Promise<UserProps>{
  const response = await api.get(GET_USER);
  return handleApiResponse<UserProps>(response);
}