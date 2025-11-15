import type { AppProps } from "next/app";
import "../src/index.css";
import { ThemeProvider } from "../src/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
