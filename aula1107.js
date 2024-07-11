// Desestruturação de objetos: permite extrair valores de um objeto e atribuir em variáveis

const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        cidade: "Ubajara",
        estado: "Ceará"
    }
}

// Dentro das chaves coloca-se as propriedades que serão extraídas
const { nome, idade, profissao, endereco } = pessoa;

console.log(nome);
console.log(idade);
console.log(profissao);
console.log(endereco);

// Podemos extrair propriedades de objetos internos
const { endereco: { estado, cidade } } = pessoa;

console.log(estado);
console.log(cidade);

// Spread (...): permite espalhar as propriedades de um objeto em outro

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

// As propriedades do objeto carro serão "copiadas" para este novo objeto
const copiaCarro = {...carro};
console.log(copiaCarro);

const novoCarro = {...carro, ano: 2024, dono: "Gabriel"}
console.log(novoCarro);