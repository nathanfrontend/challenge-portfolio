import type { NextApiRequest, NextApiResponse } from "next";
import { Portfolio } from "@/models/portfolio";
import { JOHNS_PORTFOLIO } from "@/mocks/portfolio.mocks";

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<Portfolio | { message: string }>,
) {
  const portfolio = PORTFOLIOS.get(Number(req.query.id));

  if (portfolio) {
    res.status(200).json(portfolio);
  } else {
    res.status(404).json({ message: "Portfolio not found" });
  }
}

const PORTFOLIOS: Map<number, Portfolio> = new Map(
  [JOHNS_PORTFOLIO].map((portfolio) => [portfolio.id, portfolio]),
);
