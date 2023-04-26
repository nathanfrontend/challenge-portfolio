import Head from "next/head";
import { Welcome } from "@/components/welcome/welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stockopedia Challenge</title>
        <meta
          name="description"
          content="Stockopedia Challenge - Front-end Technical Test"
        />
      </Head>
      <Welcome />
    </>
  );
}
