import Navbar from "@/components/navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
