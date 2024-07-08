import { useState } from "react";

function CalculadoraIMC() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    // Dentro do evento tem informações sobre o input
    function handlePeso(evento) {
        const input = evento.target;
        // Pega o valor dentro do input
        const valor = input.value;

        setPeso(valor);
    }

    function handleAltura(evento) {
        const input = evento.target;
        const valor = input.value;

        setAltura(valor);
    }

    function handleCalcularImc() {
        const resultado = peso / altura ** 2;
        setImc(resultado);
    }

    return (
        <section>
            <h3>Calculadora IMC</h3>
            <input 
                type="number" 
                placeholder="Digite seu peso"
                onChange={handlePeso}
            />
            <input
                type="number"
                placeholder="Digite sua altura"
                onChange={handleAltura}
            />
            <br />
            <button onClick={handleCalcularImc}>Calcular</button>
            <hr />
            <h3>Seu IMC é: {imc.toFixed(2)}</h3>
        </section>
    );
}

export default CalculadoraIMC;