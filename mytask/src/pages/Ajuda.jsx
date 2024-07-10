import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
  return (
    <main className="mt-4">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
                <Accordion.Body>
                    MyTask é um sistema para gerenciamento de tarefas pessoais. Nesta aplicação você pode gerenciar todos os seus afazeres.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Sobre a empresa</Accordion.Header>
                <Accordion.Body>
                    Esta empresa desenvolve soluções focadas em produtividade e bem-estar.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button className="mt-1 me-1">Entre em contato</Button>
        <Button className="mt-1 me-1" variant="outline-danger">Denunciar</Button>
        <Alert className="mt-1" variant="warning">Atenção! Estamos em manutenção.</Alert>
      </Container>
    </main>
  );
}

export default Ajuda;
