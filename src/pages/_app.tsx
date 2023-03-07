import { globalStyle } from '@/styles/global.js'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyle();
  
  return <Component {...pageProps} />
}
