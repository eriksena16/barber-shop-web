import {
  SignInProps,
  SignUpProps,
  LoginResponse,
  UserProps,
  updateProps
} from "@/types/AuthTypes";
import { handleApiResponse} from "@/utils/ApiResponse";
import { api } from "@/services/apiClient";
import { useAuth } from "@/hooks/useAuth";
import { GET_USER, LOGIN_USER, POST_USER, UPDATE_USER } from "../routes/routes";
import { setupAPIClient } from "./api";

export async function login(credentials: SignInProps): Promise<LoginResponse> {
  const response = await api.post(LOGIN_USER, credentials);
  return handleApiResponse<LoginResponse>(response);
}

export async function register(credentials: SignUpProps): Promise<void> {
  await api.post(POST_USER, credentials);
}

export async function updateUserData(credentials: updateProps): Promise<void> {
  await api.put(UPDATE_USER + credentials.id , credentials);
}

export async function getUserData(apiClient: ReturnType<typeof setupAPIClient>): Promise<UserProps>{
  const response = await apiClient.get(GET_USER);
  return handleApiResponse<UserProps>(response);
}