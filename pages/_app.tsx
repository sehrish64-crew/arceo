import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import { AppProps } from 'next/app';
import LayoutWrapper from '@/components/LayoutWrapper'; import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router';
import Head from 'next/head';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isAuthRoute =
    router.pathname.startsWith("/auth");

  return (
    <>
      <Head>
        <title>Arceo</title>
      </Head>
      <div className={`${poppins.variable} font-sans bg-white`}>
        {isAuthRoute ? (
          <Component {...pageProps} />
        ) : (

          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        )}

      </div>
    </>
  );
}
