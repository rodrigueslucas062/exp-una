import { Main } from "@/components/main/Main";
import { BackgroundBeams } from "@/utils/ui/background-beams";
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

      <main className="p-4 z-10">
        <Main />
      </main>
      <BackgroundBeams />
    </>
  );
}
