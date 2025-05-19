export interface CheckResponse {
    id: string;
    name: string;
    price: number;
    userId: string;
}

export interface HaircutProps {
    id: string;
    status: boolean;
    priceId: string;
    userId: string;
}

export interface ValidationHaircutProps{
    subscription: boolean;
    count: number;
}


export interface NewHaircutProps{
    name: string;
    price: string;
}