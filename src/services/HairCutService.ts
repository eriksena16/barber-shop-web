import {CheckResponse} from "@/types/HairCutTypes";
import { handleApiResponse } from "@/utils/ApiResponse";
import { setupAPIClient  } from "@/services/api";
import { GET_CHECK, POST_HAIRCUT, GET_COUNT } from "@/routes/routes";
import {NewHaircutProps, HaircutProps } from "@/types/HairCutTypes"
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


export async function CreateHaircut(newHaircut: NewHaircutProps): Promise<HaircutProps> {
  const api = setupAPIClient();
  const response = await api.post(POST_HAIRCUT, newHaircut);
  return handleApiResponse<HaircutProps>(response);
}
// export async function getUserData(): Promise<UserProps>{
//   const response = await api.get(GET_USER);
//   return handleApiResponse<UserProps>(response);
// }