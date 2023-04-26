import { Sector } from "@/models/sector";
import { Portfolio } from "@/models/portfolio";

export const CONSUMER_CYCLICALS: Sector = {
  id: 1,
  name: "Consumer Cyclicals",
};

export const BASIC_MATERIALS: Sector = {
  id: 2,
  name: "Basic Materials",
};

export const CONSUMER_DEFENSIVES: Sector = {
  id: 3,
  name: "Consumer Defensives",
};

export const JOHNS_PORTFOLIO: Portfolio = {
  id: 1,
  name: "John's Stocks & Shares ISA Portfolio",
  holdings: [
    {
      id: 1,
      name: "Reach",
      sector: CONSUMER_CYCLICALS,
      lastPrice: 89.9,
      change: 0.8,
      shares: 10000,
    },
    {
      id: 2,
      name: "Sylvania Platinum",
      sector: BASIC_MATERIALS,
      lastPrice: 91,
      change: 1.5,
      shares: 3000,
    },
    {
      id: 3,
      name: "Associated British Foods",
      sector: CONSUMER_DEFENSIVES,
      lastPrice: 1886.5,
      change: -97.5,
      shares: 100,
    },
    {
      id: 4,
      name: "Virgin Wines UK",
      sector: CONSUMER_DEFENSIVES,
      lastPrice: 39,
      change: -3.25,
      shares: 10000,
    },
  ],
};
