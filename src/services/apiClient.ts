import { setupAPIClient } from "./api";
import { useAuth } from "@/hooks/useAuth";

export const api = setupAPIClient(useAuth);