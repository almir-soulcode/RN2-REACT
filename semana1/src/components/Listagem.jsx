import CardAluno from "./CardAluno";

const compras = [
    "Batata palha", "Batata frita pronta", "Batata doce", "Batata chips",
    "Batata inglesa", "Batata rústica", "Batata crua"
];

const produtos = [
    {cod: 1, nome: "Batata palha", quantidade: 300, precoUnitario: 5},
    {cod: 2, nome: "Batata frita pronta", quantidade: 100, precoUnitario: 10},
    {cod: 3, nome: "Batata doce", quantidade: 3, precoUnitario: 10},
    {cod: 4, nome: "Batata chips", quantidade: 20, precoUnitario: 4}
];

const alunos = [
    {mat: 1, nome: "José", serie: "7º", media: 9.0},
    {mat: 2, nome: "Igor", serie: "8º", media: 7.0},
    {mat: 3, nome: "Gabriel", serie: "9º", media: 10},
    {mat: 4, nome: "Victor", serie: "8º", media: 7.5}
];

// Gerar componentes/elementos a partir de dados (array)

function Listagem() {
    // Cada string no array de compras está sendo transformada
    // em um array de <li>
    const itensCompra = compras.map((compra, index) => {
        return <li key={index}>{compra}</li>
    });

    // O key é importante para que o React saiba remover
    // ou adicionar o elemento na tela corretamente
    const cardsProduto = produtos.map((produto) => {
        return (
            <article key={produto.cod}>
                <h3>NOME: {produto.nome}</h3>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
        );
    });

    const cardsAluno = alunos.map((aluno) => {
        return <CardAluno key={aluno.mat} nome={aluno.nome} serie={aluno.serie} media={aluno.media} />
    });

    return (
        <>
            <h2>Lista de Compras</h2>
            <ul>{itensCompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>{cardsProduto}</section>
            <hr />
            <h2>Lista de Alunos</h2>
            <section>{cardsAluno}</section>
        </>
    );
}

export default Listagem;