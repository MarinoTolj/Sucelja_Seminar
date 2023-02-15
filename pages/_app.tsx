import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import { useState } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{Component.name}</title>
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <BackToTop />
        <Footer />
      </Provider>
    </>
  );
}
