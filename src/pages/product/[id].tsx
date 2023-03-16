import { ImageContainer, ProductContainer, ProductDetailsContainer } from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetailsContainer>
            <h1>
                camisa x
            </h1>
            <span>393</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fugit harum, aperiam illum explicabo error eligendi. Consequatur commodi perspiciatis nihil? Nisi libero fugiat quisquam aliquid sequi amet consequatur molestias. Exercitationem.</p>
            <button>Comprar</button>
            </ProductDetailsContainer>
        </ProductContainer>
    )
}