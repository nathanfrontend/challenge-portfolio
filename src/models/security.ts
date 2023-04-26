import { Sector } from "@/models/sector";

export interface Security {
  id: number;
  name: string;
  sector: Sector;
  lastPrice: number;
  change: number;
}
