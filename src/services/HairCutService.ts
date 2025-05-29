import { CheckResponse } from "@/types/HairCutTypes";
import { handleApiResponse } from "@/utils/ApiResponse";
import { setupAPIClient } from "@/services/api";
import { GET_CHECK, BASE_URL_HAIRCUT, GET_COUNT, GET_HAIRCUT } from "@/routes/routes";
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
  const response = await api.post(BASE_URL_HAIRCUT, newHaircut);
  return handleApiResponse<HaircutItemProps>(response);
}

export async function UpdateHaircut(updateHaircut: HaircutItemProps): Promise<HaircutItemProps> {
  const api = setupAPIClient();
  const response = await api.put(`${BASE_URL_HAIRCUT}${updateHaircut.id}`, updateHaircut);
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

  const response = await api.get(`${BASE_URL_HAIRCUT}${id}`);

  return handleApiResponse<HaircutItemProps>(response);
}


// export async function getUserData(): Promise<UserProps>{
//   const response = await api.get(GET_USER);
//   return handleApiResponse<UserProps>(response);
// }