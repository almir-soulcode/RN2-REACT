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
import Contador from "./components/Contador";
import Eventos from "./components/Eventos";

// Componente principal da aplicação
function App() {
  return (
    <>
      <Contador valorInicial={20} />
      <Contador valorInicial={0}/>
      <Contador valorInicial={1000}/>
      <Contador />
    </>
  );
}

export default App;
