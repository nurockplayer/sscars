import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>小施汽車商行 - 堅持車況透明化、實車實圖實價、絕不調整里程數。</title>
                <meta
                    name="小施汽車"
                    content="Generated by 小施汽車"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

            </main>
        </div>
    );
}
