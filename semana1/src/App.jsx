// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";

// Componente principal da aplicação
function App() {
    return (
        <>
            <Blog />
            <Rodape/>
        </>
    );
}

export default App;