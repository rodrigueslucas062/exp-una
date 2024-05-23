import Navbar from "@/components/navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
