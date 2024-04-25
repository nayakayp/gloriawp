import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />;
      <GoogleAnalytics gaId="G-BG7M8ZY4EG" />
      <GoogleTagManager gtmId="BG7M8ZY4EG" />
    </Fragment>
  );
}
