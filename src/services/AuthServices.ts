import {
  SignInProps,
  SignUpProps,
  LoginResponse,
  UserProps,
} from "@/types/AuthTypes";
import { handleApiResponse } from "@/utils/ApiResponse";
import { api } from "@/services/apiClient";

import { GET_USER, LOGIN_USER, POST_USER } from "../routes/routes";
import { setupAPIClient } from "./api";

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


export async function getUserData(apiClient: ReturnType<typeof setupAPIClient>): Promise<UserProps>{
  const response = await apiClient.get(GET_USER);
  return handleApiResponse<UserProps>(response);
}