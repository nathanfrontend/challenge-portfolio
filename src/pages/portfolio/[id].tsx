import React from "react";
import { useRouter } from "next/router";
import useSwr from "swr";
import { Portfolio } from "@/models/portfolio";
import styles from "./portfolio.module.scss";
import Header from "@/components/portfolio/header/header";
import Holdings from "@/components/portfolio/holdings/holdings";
import NotFound from "@/components/error/notFound";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Portfolio = () => {
  const { query } = useRouter();
  const { data, isLoading } = useSwr<Portfolio>(
    query.id ? `/api/portfolio/${query.id}` : null,
    fetcher,
  );

  if (data?.message === "Portfolio not found")
    return (
      <div className={styles.portfolioContainer}>
        <NotFound id={query.id} />
      </div>
    );
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
