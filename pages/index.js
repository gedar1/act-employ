import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardForm from "../src/components/card/cardform";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formulario</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CardForm />
      </main>
    </div>
  );
}
