import {
  ApiResponse,
} from "@/types/AuthTypes";

export function handleApiResponse<T>(response: { data: ApiResponse<T> }) {
  if (!response.data.success) {
    throw new Error(response.data.errors?.join(", ") || "Unknown error");
  }
  return response.data.data as T;
}