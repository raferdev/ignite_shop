import { globalStyle } from '@/styles/global.js'
import type { AppProps } from 'next/app'

globalStyle();

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
