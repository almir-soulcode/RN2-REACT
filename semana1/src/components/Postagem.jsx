import "./Postagem.css";

// props => são os atributos que definimos no uso do Postagem
function Postagem(props) {
    return (
        <article className="postagem">
            <h3>{props.titulo}</h3>
            <p>{props.desc}</p>
            <img src={props.linkImagem} alt={props.legenda}/>
        </article>
    );
}

export default Postagem;