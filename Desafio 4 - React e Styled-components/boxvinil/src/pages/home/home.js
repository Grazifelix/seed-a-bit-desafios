import { BodyDefault } from "./homeStyle";
import BoxVinilLogo from "../../assets/img/logo.svg"
import elvisAlbum from "../../assets/img/elvis.jpg"
import beatlesAlbum from "../../assets/img/beatles.jpg"
import bobAlbum from "../../assets/img/bob.jpg"


function Home() {
    return (

        <BodyDefault>
            <img src={BoxVinilLogo} alt="BoxVinil-logo"></img>
            <nav>
                <button type="submit">Home</button>
                <button type="submit">Produtos</button>
                <button type="submit">Contatos</button>
            </nav>
            <section id="section-boxvinil">
                <h1>BoxVinil</h1>
                <p>A sua plataforma exclusiva para vinis de <strong>alta qualidade</strong>. Descubra clássicos, raridades e
                    lançamentos exclusivos
                    em uma experiência de compra intuitiva e segura. Comece sua jornada musical hoje mesmo!</p>

            </section>
            <section>
                <h2>Principais recursos do BoxVinil</h2>
                <p class="p-recursos">
                    Variedade Excepcional <br></br>
                    Autenticidade Garantida <br></br>
                    Lançamentos Exclusivos <br></br>
                    Envio Seguro e Rápido <br></br>
                    Recomendações Personalizadas <br></br>
                    Atendimento ao Cliente Excepcional <br></br>
                </p>
            </section>

            <section>
                <h2>Produtos em Destaque</h2>
                <hr></hr>
                <img src={beatlesAlbum} alt="beatles-album"></img>
                <p>Beatles</p>
                <button type="submit" class="button-compra poppins-light">comprar</button>

                <hr></hr>
                <img src={elvisAlbum} alt="elvis-album"></img>
                <p>Elvis Presley</p>
                <button type="submit" class="button-compra poppins-light">comprar</button>

                <hr></hr>
                <img src={bobAlbum} alt="bob-marley-album"></img>
                <p>Bob Marley</p>
                <button type="submit" class="button-compra poppins-light">comprar</button>

            </section>


        </BodyDefault>


    )
}

export default Home;