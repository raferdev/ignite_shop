import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetailsContainer } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image.js";
import Stripe from "stripe";

interface ProductProps {
    product:{
      id:string
      name:string
      imageUrl:string
      price:string,
      description:string
  }
}

export default function Product({product}:ProductProps) {
    return (
        <ProductContainer>
            <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt=''/>
            </ImageContainer>
            <ProductDetailsContainer>
            <h1>
                {product.name}
            </h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <button>Comprar</button>
            </ProductDetailsContainer>
        </ProductContainer>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
    return {
        paths:[{
            params:{
                id:'prod_NU26PdNJfxRe3M'
            }
        }],fallback:false
    }
}

export const getStaticProps:GetStaticProps<any,{id:string}> = async ({params}) => {
    const paramsId = params?params.id:''
    
    const productDetails = await stripe.products.retrieve(paramsId,{
        expand: ["default_price"]
      });
      
      const {id, name, images, default_price, description } = productDetails
     
      const productPrice = default_price as Stripe.Price
     
      const price = productPrice.unit_amount? new Intl.NumberFormat('pt-BR',{
          style:'currency',
          currency:'BRL'
        }).format(productPrice.unit_amount / 100) : 0
        const imageUrl = images[0]
        const product = {
        id, name, imageUrl, price, description
      }
    
    return {
        props:{
            product
        },
        revalidate: 60*60*1 // 1hr
    }
}