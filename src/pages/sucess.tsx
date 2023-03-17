import { ImageContainer } from "@/styles/pages/product.js";
import { SucessContainer } from "@/styles/pages/sucess.js";
import Link from "next/link.js";

export default function Sucess() {
    return (
        <SucessContainer>
            <h1>Compra efetuada</h1>
            <ImageContainer>

            </ImageContainer>
            <p>
                Uhul! <strong>{'batatinha'}</strong> você acabou de comprar <strong>{'camisa legal'}</strong>
            </p>
            <Link href='/'>
                Voltar a pagina inicial!
            </Link>
        </SucessContainer>
    )
}