
export interface ScheduleItem {
  id: string;
  customer: string;
  haircut: {
    id: string;
    name: string;
  };  
  price: number;
}

export interface DashboardProps {
  schedule: ScheduleItem[];
}

export interface DataReturnDashboardProps {
  success: boolean;
  schedule: DashboardProps;
}