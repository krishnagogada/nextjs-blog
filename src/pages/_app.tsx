import Header from "../components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
