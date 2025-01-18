import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'mobx-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;