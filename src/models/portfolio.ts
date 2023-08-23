import { Security } from "@/models/security";

export interface Portfolio {
  name: string;
  id: number;
  message: string;
  isLoading: boolean;
  holdings: SecurityHoldings[];
}

export interface SecurityHoldings extends Security {
  shares: number;
}
