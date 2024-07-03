// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";

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
      <Navbar logado={true} nomeUsuario="Batata"/>
      <Navbar logado={false} />
      <Blog />
      <Rodape />
    </>
  );
}

export default App;
