import React from "react";

import styles from "./portfolio.module.scss";
import { Portfolio } from "@/models/portfolio";
type Data = {
  data: Portfolio;
};
const Holdings = ({ data }: Data) => {
  return (
    <div className={styles.portfolioHoldings}>
      <div className={styles.sections}>
        <h1>Holdings ({data.holdings.length})</h1>
      </div>
      <div className={styles.sections}>
        <h2>Sectors:</h2>
        <div className={styles.sectors}>
          {data?.holdings.map(({ sector }) => (
            <span key={sector.id} className={styles.sectorList}>
              {sector.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.sections}>
        <table className={styles.table}>
          <tr>
            <th>Name</th>
            <th>Sector</th>
            <th>Shares</th>
            <th>Last Price</th>
            <th>Change</th>
            <span className={styles.tableBorder} />
          </tr>

          {data?.holdings.map(
            ({ name, sector, lastPrice, change, shares, id }) => {
              const isRed = change.toString().includes("-");
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{sector.name}</td>
                  <td>{shares.toLocaleString()}</td>
                  <td>{lastPrice}p</td>
                  <td className={isRed ? styles.redText : styles.greenText}>
                    {!isRed && "+"} {change}
                  </td>
                </tr>
              );
            },
          )}
        </table>
      </div>
    </div>
  );
};

export default Holdings;
