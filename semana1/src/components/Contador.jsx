import { useState } from "react";
import "./Contador.css";

function Contador() {
    // Para definir um estado usamos: useState
    // useState -> estado, função para alterar este estado
    // definimos no useState o valor inicial do estado
    const [numero, setNumero] = useState(0);

    function handleIncremento() {
        // Indica ao componente que ele deve "atualizar",
        // para corresponder a mudança do estado
        setNumero(numero + 1);
        console.log("Evento incremento: ", numero);
    }

    // Implementar o decremento
    function handleDecremento() {
        if(numero > 0) {
            setNumero(numero - 1);
        }
    }

    // Crie um botão que ao clicar incrementa +100

    return (
        <section>
            <h2 className={numero % 2 === 0? "par":"impar"}>Contagem: {numero}</h2>
            <button onClick={handleIncremento}>+1</button>
            <button onClick={handleDecremento}>-1</button>
        </section>
    );
}

export default Contador;

// Para que o número mude, o componente precisa
// renderizar novamente. Para fazer isso:
// Estado -> variavel especial que sincronizar as mudanças
// na tela