import "../styles/globals.css";
import axios from "axios";

export default function App({ Component, pageProps }) {

  axios.defaults.baseURL = process.env.API_BASE_URL;
  // console.log(process.env.API_BASE_URL);

  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />;
    </>
  );
}
