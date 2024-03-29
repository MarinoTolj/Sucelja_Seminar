import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
//@ts-ignore
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BuyBirds</title>
        <meta
          name="description"
          content="Your number one Bird store in Europe. Would you kindly buy here"
        />
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Component {...pageProps} />
          <BackToTop />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
