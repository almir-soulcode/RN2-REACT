// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";

// Componente principal da aplicação
function App() {
    return (
        <main>
            <Titulo />
            <Mensagem />
            <Mensagem />
            <Mensagem />
            <Mensagem />
            <Mensagem />
        </main>
    );
}

export default App;