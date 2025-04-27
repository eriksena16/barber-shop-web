import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";
import { api } from "@/services/apiClient";


interface AuthContexData {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>
}

interface UserProps {
    id: string;
    name: string;
    email: string;
    address: string;
    subscriptions?: SubscriptionProps[];

}

interface SubscriptionProps {
    id: string;
    status: string;
}

interface LoginResponse {
    accessToken: string;
    user: UserProps;
}

type AuthProviderProps = {
    children: ReactNode
}

interface SignInProps {
    email: string;
    password: string;
}

type ApiResponse<T> = {
    success: boolean;
    data?: T;
    errors?: string[];
};

function handleApiResponse<T>(response: { data: ApiResponse<T> }) {
    if (!response.data.success) {
        throw new Error(response.data.errors?.join(', ') || 'Unknown error');
    }
    return response.data.data as T;
}

export const AuthContex = createContext({} as AuthContexData)

export function signOut() {
    console.log("Error Logount");
    try {
        destroyCookie(null, '@barber.token', { path: '/' })
        Router.push('/login');
    } catch (err) {
        console.log("Error ao sair");
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/api/v1/Auth/login', {
                email,
                password
            })

            console.log("response", response.data);

            const data = handleApiResponse<LoginResponse>(response);
            const { accessToken, user } = data;
            const { id, name, address, subscriptions } = user;
            setCookie(undefined, '@barber.token', accessToken, {
                maxAge: 60 * 60 * 3, // 3 horas
                path: '/'
            })

            setUser({
                id,
                name,
                email,
                address,
                subscriptions
            })

            api.defaults.headers['Authorization'] = `Bearer ${accessToken}`

            Router.push('/dashboard')


        } catch (err) {
            console.log("Error ao logar", err)
        }
    }
    return (
        <AuthContex.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContex.Provider>
    )
}