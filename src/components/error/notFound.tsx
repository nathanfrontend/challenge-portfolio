import React from "react";
import styles from "./notFound.module.scss";
type id = {
  id: number;
};
const NotFound = ({ id }: id) => {
  return (
    <div className={styles.header}>
      <h1>Portfolio not found</h1>
      <h2>
        {" "}
        We apologise, but we could not locate a portfolio associated with the
        ID: {id}
      </h2>
    </div>
  );
};

export default NotFound;
