import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tarefas() {
  return (
    <main>
      <Container className="mt-5">
        <h1>Suas tarefas</h1>
        <hr />
        <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefa</Link>
      </Container>
    </main>
  );
}

export default Tarefas;
