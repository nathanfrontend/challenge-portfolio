import React from "react";
import { useRouter } from "next/router";
import useSwr from "swr";
import { Portfolio } from "@/models/portfolio";
import styles from "./portfolio.module.scss";
import Header from "@/components/portfolio/header";
import Holdings from "@/components/portfolio/holdings";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Portfolio = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr<Portfolio>(
    query.id ? `/api/portfolio/${query.id}` : null,
    fetcher,
  );

  if (error) return <div>Failed to load user</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className={styles.portfolioContainer}>
      <Header data={data} />
      <Holdings data={data} />
    </div>
  );
};

export default Portfolio;
