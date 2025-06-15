import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

function AppContainer({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <main className={`${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default function App(props: AppProps) {
  return (
    <ThemeProvider>
      <AppContainer {...props} />
    </ThemeProvider>
  );
}
