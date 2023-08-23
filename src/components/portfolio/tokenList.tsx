import React from "react";
import styles from "./portfolio.module.scss";
import { Portfolio } from "@/models/portfolio";
type Data = {
  data: Portfolio;
};
export const TokenList = ({ data }: Data) => {
  return (
    <ul aria-label="tokens">
      {data?.holdings.map(({ sector, lastPrice }) => (
        //using last price as a key due to duplicate id issues, ideally would have a unique key sent via api

        <li aria-label="token" key={lastPrice} className={styles.sectorList}>
          {sector.name}
        </li>
      ))}
    </ul>
  );
};
