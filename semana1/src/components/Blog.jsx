import "./Blog.css";
import Postagem from "./Postagem";

function Blog() {
    return (
        <section className="blog">
            <h2>Postagens do dia</h2>
            <Postagem titulo="React é top!!!" desc="Descrição da postagem 1" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
            <Postagem titulo="Estudando CSS" desc="Descrição da postagem 2" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
            <Postagem titulo="Estudando JS" desc="Descrição da postagem 2" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
        </section>
    );
}

export default Blog;