import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import EditarTarefa from "./pages/EditarTarefa";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext"

function App() {
  // O estado de usuario indica se ele está logado ou não na aplicação
  // null = deslogado
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    // Monitora/detecta o usuário conectado/desconectado
    onAuthStateChanged(auth, (user) => {
      // user é nulo -> usuário deslogou
      // se tem objeto -> usuário logou
      setUsuarioLogado(user);
    });
  }, []);

  // Usuario.Provider é o elemento que irá compartilhar um valor/dado
  // para os componentes filhos da aplicação
  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UsuarioContext.Provider>
    </>
  );
}

export default App;
