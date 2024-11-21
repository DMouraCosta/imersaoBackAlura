import conectarAoBanco from "../config/dbconfig.js"; // Importa a função para conectar ao banco de dados

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para obter todos os posts
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");

    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}

// Função para criar um novo post
export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");

    // Insere o novo post na coleção e retorna o resultado da operação
    return colecao.insertOne(novoPost);
}