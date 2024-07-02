// Importante: importar para que os estilos do arquivo
// façam parte do projeto
import "./Mensagem.css";

function Mensagem() {
    const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
    const nomeAutor = "J. Almir";
    const linkImagem = "https://picsum.photos/200";

    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{textoTitulo.toUpperCase()}</h2>
            <img src={linkImagem} alt="Imagem da mensagem"/>
            <p className="paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas.
            </p>
            <small>Criado por: {nomeAutor}</small>
        </section>
    );
}

export default Mensagem;