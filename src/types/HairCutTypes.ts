export interface CheckResponse {
    id: string;
    status: boolean;
    priceId: string;
    userId: string;
}

export interface NewHaircutProps{
    subscription: boolean;
    count: number;
}