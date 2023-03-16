import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

export default function Home() {
  return (
<HomeContainer>
  <Product>
    <Image src={''} width={520} height={480} alt={''}/>
  </Product>
</HomeContainer>
  )
}
