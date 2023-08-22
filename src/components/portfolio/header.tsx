import React from "react";
import styles from "./portfolio.module.scss";
import { Portfolio } from "@/models/portfolio";
type Data = {
  data: Portfolio;
};
const Header = ({ data }: Data) => {
  const CalculateValuation = () => {
    const totalSum = data.holdings.reduce(
      (
        accumulator: number,
        currentObject: { shares: number; lastPrice: number },
      ) => {
        const product = currentObject.shares * currentObject.lastPrice;
        return accumulator + product;
      },
      0,
    );

    const pounds = Math.floor(totalSum / 100);
    const pence = totalSum % 100;

    const formattedValue = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(pounds + pence / 100);

    return <h3>{formattedValue}</h3>;
  };

  return (
    <div className={styles.header}>
      <h1>{data.name}</h1>
      <h2> Valuation </h2>
      <CalculateValuation />
    </div>
  );
};

export default Header;
