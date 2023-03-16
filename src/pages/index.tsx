import { stripe } from "@/lib/stripe";
import { HomeContainer, Product } from "@/styles/pages/home";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

interface HomeProps {
  products:{

    id:string
    name:string
    imageUrl:string
    price:number
}[]

}
export default function Home({products}:HomeProps) {
  return (
<HomeContainer>
{products.map(product => {
  return (
  <Product key={product.id}>
    <Image src={product.imageUrl} width={520} height={480} alt={''}/>
  <footer>
    <strong>
      {product.name}
    </strong>
    <span>
      {product.price}
    </span>
  </footer>
  </Product>
  )
})}
</HomeContainer>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {

  const response = await stripe.products.list({
    expand: ["data.default_price"]
  });

  const products = response.data.map(product => {
    const {id, name, images, default_price } = product
    const productPrice = default_price as Stripe.Price
    const price = productPrice.unit_amount?productPrice.unit_amount / 100 : 0
    return {
      id,
      name,
      imageUrl:images[0],
      price,

    }
  })


  return {
    props:{
      products
    }
  }
}