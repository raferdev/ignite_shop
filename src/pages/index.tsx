import { HomeContainer, Product } from "@/styles/pages/home.js";
import Image from "next/image.js";

export default function Home() {
  return (
<HomeContainer>
  <Product>
    <Image src={''} width={520} height={480} alt={''}/>
  </Product>
</HomeContainer>
  )
}
