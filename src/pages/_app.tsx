import { globalStyle } from '@/styles/global.js'
import { Container, Header } from '@/styles/pages/app.js';
import type { AppProps } from 'next/app'
import Image from 'next/image.js';
import logoImg from '../assets/logo.svg';
globalStyle();

export default function App({ Component, pageProps }: AppProps) {

  return( 
  <Container>
    <Header>
      <Image src={logoImg} alt=''/>
    </Header>
    <Component {...pageProps} />
  </Container>
  
  )
}
