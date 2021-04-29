import '../styles/globals.css';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import DefTheme from '../styles/DefaultTheme';
import withRedux from '../store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <NextNProgress
      color="#555555"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
    <ThemeProvider theme={DefTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default withRedux(MyApp);
