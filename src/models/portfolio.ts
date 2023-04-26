import { Security } from "@/models/security";

export interface Portfolio {
  name: string;
  id: number;
  holdings: SecurityHoldings[];
}

export interface SecurityHoldings extends Security {
  shares: number;
}
