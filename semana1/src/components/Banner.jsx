import "./Banner.css";
import imagem from "../assets/banner.jpg";

function Banner() {
    return (
       <section>
            <img src={imagem} alt="Banner" width="240"/>
            {/* <div className="teste" style={{backgroundImage: `url(${imagem})`}}></div> */}
            <br/>
            {/* <img src="/vite.svg" alt="Logo do vite"/>
            <img src="/images/banner.jpg"/> */}
            <section className="fundo-imagem">
                Lorem ipsum dolor sit amet.
            </section>
            <button>Clique aqui</button>
       </section> 
    );
}

export default Banner;