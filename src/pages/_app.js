import Header from "@/components/header";
import "@/styles/globals.css";
// pages/_app.js
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">

        <Component {...pageProps} />

    </ThemeProvider>
  );
}

export default MyApp;
