import "../styles/globals.css";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
