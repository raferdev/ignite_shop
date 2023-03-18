import { stripe } from "@/lib/stripe";
import { ImageContainer } from "@/styles/pages/product";
import { SucessContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import Head from "next/head";
interface SucessProps {
    customerName:string
    product: {
        name:string
        imageUrl:string
    }
}


export default function Sucess({customerName,product}:SucessProps) {
    
    return (
        <>
        <Head>
        <title>Sucess | Ignite Shop</title>
        <meta name="robots" content="noindex"/>
        </Head>
        <SucessContainer>
            <h1>Confirmed Purchase</h1>
            <ImageContainer>
            <Image src={product.imageUrl} height={120} width={110} alt={''}/>
            </ImageContainer>
            <p>
                Uhul! <strong>{customerName}</strong> you buy the most beautiful <strong>{product.name}!</strong>
            </p>
            <Link href='/' prefetch={false}>
               Go back to home page!
            </Link>
        </SucessContainer>
</>
    )
}

export const getServerSideProps:GetServerSideProps = async ({query}) => {
    if(!query.session_id) {
        return {
            redirect: {
                destination:'/',
                permanent:false,
            }
        }
    }
    
    const session_id = String(query.session_id);
    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand:['line_items','line_items.data.price.product']
    })

    const customerName =  session.customer_details?.name
    const { name, images } =  session.line_items?.data[0].price?.product as Stripe.Product
    
    return {
        props:{
            customerName,
            product: {
                name,
                imageUrl:images[0]
            }
        }
    }
}