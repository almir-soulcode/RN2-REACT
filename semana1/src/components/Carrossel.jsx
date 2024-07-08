import { useState } from "react";

const slides = [
  {
    imagem:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    titulo: "Aproveite cada segundo",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    titulo: "Respire e inspire",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
    titulo: "Valorize a vida",
  },
  {
    imagem:
      "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    titulo: "Esteja com quem te faz bem",
  },
];

function Carrossel() {
    const [index, setIndex] = useState(0);

    function handleAvancar() {
        // ja estou no final?
        if(index === slides.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handleVoltar() {
        // ja estou no começo?
        if(index === 0) {
            setIndex(slides.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    // Pega os dados do slide atual
    const slide = slides[index];

    return (
        <section>
            <article>
                <img src={slide.imagem} alt="Imagem do Slide" width="200"/>
                <h3>{slide.titulo}</h3>
            </article>
            <div>
                <button onClick={handleVoltar}>⬅️</button>
                <button onClick={handleAvancar}>➡️</button>
            </div>
            <p>Index: {index}</p>
        </section>
    );
}

export default Carrossel;
