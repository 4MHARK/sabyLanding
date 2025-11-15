import type { AppProps } from "next/app";
import "../src/index.css";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import { AuthModalProvider } from "../src/contexts/AuthModalContext";
import AuthModal from "../src/components/auth/AuthModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthModalProvider>
        <>
          <Component {...pageProps} />
          <AuthModal />
        </>
      </AuthModalProvider>
    </ThemeProvider>
  );
}
