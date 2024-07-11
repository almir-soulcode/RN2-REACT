import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastro() {
  const { register, handleSubmit } = useForm();

  function cadastrar(data) {
    console.log("Cadastro!");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className="form-control" 
            {...register("nome")}
            />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            {...register("email")}
            />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className="form-control" 
            {...register("senha")}
            />
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Cadastrar
        </Button>
        <Button variant="danger" className="mt-1 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Cadastro;
