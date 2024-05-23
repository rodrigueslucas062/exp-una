import { Main } from "@/components/main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Expo Una</title>
        <meta name="description" content="Expo Una" />
        <meta property="og:url" content="https://exp-una.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expo Una" />
        <meta property="og:description" content="Expo Una" />
      </Head>

      <main className="min-h-screen min-w-screen p-4">
        <Main />
      </main>
    </>
  );
}
