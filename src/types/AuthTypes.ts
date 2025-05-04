
export interface UserProps {
    id: string;
    name: string;
    email: string;
    address: string;
    subscriptions?: SubscriptionProps[];

}

export interface SubscriptionProps {
    id: string;
    status: string;
}

export interface LoginResponse {
    accessToken: string;
    user: UserProps;
}

export interface SignInProps {
    email: string;
    password: string;
};

export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    errors?: string[];
};

export interface SignUpProps{
    name: string;
    email: string;
    password: string;
    address: string;
}
