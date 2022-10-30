import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import Layout from '@/layout/index'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#e00000" options={{ showSpinner: false }} />
      <Layout>
        
      <Component {...pageProps} />
</Layout>
    </>
  );
}
