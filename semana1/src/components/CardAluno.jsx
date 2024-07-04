import "./CardAluno.css";

// <CardAluno nome="" serie="" media={0}/>
function CardAluno(props) {
    const classe = props.media >= 7 ? "aprovado" : "reprovado";

    return (
        <article className="card-aluno">
            <h4>{props.nome}</h4>
            <p>Série: {props.serie}</p>
            <strong className={classe}>Média: {props.media}</strong>
            <p className={classe}>{props.media >= 7 ? "Aprovado!" : "Reprovado!"}</p>
        </article>
    );
}

export default CardAluno;