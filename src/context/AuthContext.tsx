import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "@/services/apiClient";
import { UserProps, SignInProps, SignUpProps } from "@/types/AuthTypes";
import * as authService from "@/services/AuthServices";
import { getUserData } from "@/services/AuthServices";

interface AuthContexData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
}

export type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContex = createContext({} as AuthContexData);

export function signOut() {
  try {
    destroyCookie(null, "@barber.token", { path: "/" });
    Router.push("/login");
  } catch (err) {
    console.log("Error ao sair");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;
  useEffect(() => {
    const { "@barber.token": token } = parseCookies();

    if (token) {
      const fetchUser = async () => {
        try {
          const data = await getUserData();
          setUser(data);
        } catch (err) {
          signOut();
        }
      };

      fetchUser();
    }
  }, []);
  async function signIn(credentials: SignInProps) {
    try {
      const response = await authService.login(credentials);

      const { accessToken, user } = response;

      setCookie(undefined, "@barber.token", accessToken, {
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      setUser(user);
      api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
      Router.push("/dashboard");
    } catch (err) {
      console.log("Error ao logar", err);
    }
  }

  async function signUp(credentials: SignUpProps) {
    try {
      await authService.register(credentials);
      Router.push("/login");
    } catch (err) {
      console.log("Erro ao cadastrar: ", err);
    }
  }

  return (
    <AuthContex.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContex.Provider>
  );
}
