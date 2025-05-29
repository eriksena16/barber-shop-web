import { CheckResponse } from "@/types/HairCutTypes";
import { handleApiResponse } from "@/utils/ApiResponse";
import { setupAPIClient } from "@/services/api";
import { GET_CHECK, POST_HAIRCUT, GET_COUNT, GET_HAIRCUT, GET_HAIRCUT_ID } from "@/routes/routes";
import { NewHaircutProps, HaircutItemProps } from "@/types/HairCutTypes"
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


export async function CreateHaircut(newHaircut: NewHaircutProps): Promise<HaircutItemProps> {
  const api = setupAPIClient();
  const response = await api.post(POST_HAIRCUT, newHaircut);
  return handleApiResponse<HaircutItemProps>(response);
}

export async function ListHaircut(status: boolean, ctx?: any): Promise<HaircutItemProps[]> {
  const api = setupAPIClient(ctx);
  const response = await api.get(GET_HAIRCUT, {
    params: {
      status: status,
    }
  });
  return handleApiResponse<HaircutItemProps[]>(response);
}

export async function GetHaircut(id: string, ctx?: any): Promise<HaircutItemProps> {
  const api = setupAPIClient(ctx);

  const response = await api.get(`${GET_HAIRCUT_ID}${id}`);

  return handleApiResponse<HaircutItemProps>(response);
}


// export async function getUserData(): Promise<UserProps>{
//   const response = await api.get(GET_USER);
//   return handleApiResponse<UserProps>(response);
// }