import {CheckResponse} from "@/types/HairCutTypes";
import { handleApiResponse } from "@/utils/ApiResponse";
import { setupAPIClient  } from "@/services/api";
import { GET_CHECK, GET_HAIRCUT_ID, GET_COUNT } from "@/routes/routes";

export async function Check(ctx: any): Promise<CheckResponse> {
  const api = setupAPIClient(ctx);
  const response = await api.get(GET_CHECK);
  
  return handleApiResponse<CheckResponse>(response);
}

export async function Count(ctx: any): Promise<number> {
  const api = setupAPIClient(ctx);
  const response = await api.get(GET_COUNT);
  return handleApiResponse<number>(response);
}

// export async function getUserData(): Promise<UserProps>{
//   const response = await api.get(GET_USER);
//   return handleApiResponse<UserProps>(response);
// }