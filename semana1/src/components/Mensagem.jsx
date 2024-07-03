// Importante: importar para que os estilos do arquivo
// façam parte do projeto
import "./Mensagem.css";

function Mensagem(props) {
    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{props.textoTitulo.toUpperCase()}</h2>
            <img src={props.linkImagem} alt="Imagem da mensagem"/>
            <p className="paragrafo">{props.paragrafo}</p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
    );
}

export default Mensagem;