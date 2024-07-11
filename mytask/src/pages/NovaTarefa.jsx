import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function NovaTarefa() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvarTarefa(data) {
    console.log("Salvar tarefa");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1>Adicionar tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input 
            type="text" 
            id="titulo" 
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
            />
            {errors.titulo && <small className="invalid">O título é inválido!</small>}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea 
            id="descricao" 
            className="form-control"
            {...register("descricao", { required: true })}
            ></textarea>
            {errors.descricao && <small className="invalid">A descrição é inválida!</small>}
        </div>
        <div>
          <label htmlFor="dataConclusao">Data</label>
          <input 
            type="date" 
            id="dataConclusao" 
            className="form-control" 
            {...register("dataConclusao")}
            />
        </div>
        <div className="form-check">
          <input 
            type="checkbox" 
            id="concluido" 
            className="form-check-input"
            {...register("concluido")}
            />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
          </label>
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria" 
            className="form-select"
            {...register("categoria")}
            >
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Salvar Tarefa
        </Button>
      </form>
    </main>
  );
}

export default NovaTarefa;
