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

    return (
        <>
            <h2>Lista de Compras</h2>
            <ul>{itensCompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>{cardsProduto}</section>
        </>
    );
}

export default Listagem;

// Exercício: Listar os cards de aluno a partir de um array de alunos;
// - criar um array de objetos (matricula, nome, serie e media)
// - gerar uma lista de CardAluno / reutilizar o CardAluno;
// Código do CardAluno: https://codeshare.io/XLBpLo
// Correção: 13h40