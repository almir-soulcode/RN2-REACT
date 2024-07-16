// O propósito deste arquivo é ter todas as funções
// necessárias para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
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

export async function deleteTarefa(id) {
  // Cria uma referência para um documento da coleção
  const tarefaDoc = doc(tarefasCol, id);
  // Deletar o documento da coleção de acordo com o id
  await deleteDoc(tarefaDoc);
}

export async function getTarefa(id) {
  // Cria uma referência para um documento específico da coleção
  const tarefaDoc = doc(tarefasCol, id);
  // Trazer as informações do documento
  const snapshot = await getDoc(tarefaDoc);

  // Retorna os dados dentro do documento
  // {titulo: '', descricao: '', ...}
  return snapshot.data();
}

export async function updateTarefa(id, data) {
  const tarefaDoc = doc(tarefasCol, id);
  await updateDoc(tarefaDoc, data);
}