import { useContext} from "react";
import { AuthContex } from "@/context/AuthContext";

export const useAuth = () => useContext(AuthContex);