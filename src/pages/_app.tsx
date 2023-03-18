import { globalStyle } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app'
import Image from 'next/image';
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
