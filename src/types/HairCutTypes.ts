export interface CheckResponse {
    id: string;
    name: string;
    price: number;
    userId: string;
}

export interface HaircutItemProps {
    name: string;
    id: string;
    status: boolean;
    price: string | number;
    userId: string;
}

export interface HaircutsProps {
    haircuts: HaircutItemProps[];
}

export interface ValidationNewHaircutProps{
    subscription: boolean;
    count: number;
}

export interface ValidationEditHaircutProps{
    subscription: boolean;
    haircut: HaircutItemProps;
}


export interface NewHaircutProps{
    name: string;
    price: number;
}