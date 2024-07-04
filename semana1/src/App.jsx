// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

// import Rodape from "./components/Rodape";
// import Blog from "./components/Blog";
// import Mensagem from "./components/Mensagem";
// import Navbar from "./components/Navbar";
// import CardAluno from "./components/CardAluno";
// import CardProduto from "./components/CardProduto";
// import Listagem from "./components/Listagem";
import Banner from "./components/Banner";

// Componente principal da aplicação
function App() {
  return (
    <>
      {/* <Mensagem
        textoTitulo="As batatas quando nascem se esparramam pelo chão"
        nomeAutor="J. Almir"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        linkImagem="https://picsum.photos/200"
      />
      <Mensagem
        textoTitulo="Quarta-feira é dia de React"
        nomeAutor="Gabriel Braga"
        paragrafo="Estudamos props e renderização condicional"
        linkImagem="https://picsum.photos/200"
      /> */}
      {/* <Navbar logado={true} nomeUsuario="Batata"/>
      <Navbar logado={false} />
      <Blog />
      <Rodape /> */}
      {/* <CardAluno nome="José" serie="7º" media={8.5}/>
      <CardAluno nome="Igor" serie="9º" media={5.5}/>
      <CardAluno nome="Victor" serie="6º" media={7.0}/> */}
      {/* <CardProduto nome="Celular" precoUnitario={2000} desconto={10}/>
      <CardProduto nome="Fone Wireless" precoUnitario={100} desconto={15}/>
      <CardProduto nome="Carro" precoUnitario={90000} desconto={0}/> */}
      {/* <Listagem /> */}
      <Banner />
    </>
  );
}

export default App;
