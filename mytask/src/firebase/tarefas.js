// O propósito deste arquivo é ter todas as funções
// necessárias para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = que o resultado não é obtido de imediato
// Haverá uma "espera"
export async function addTarefa(data) {
  // Essa função se comunica com o firestore, envia os dados (data)
  // e salva na coleção indicada
  await addDoc(tarefasCol, data);
  // await é uma instrução para esperar o resultado de addDoc
}

export async function getTarefas() {
  // Snapshot é o resultado da busca na coleção de tarefas
  const snapshot = await getDocs(tarefasCol);
  const tarefas = [];

  // Percorremos cada documento da coleção e inserimos no array
  // de tarefas
  snapshot.forEach((doc) => {
    tarefas.push({ ...doc.data(), id: doc.id });
  });

  return tarefas;
}
