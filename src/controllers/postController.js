import fs from "fs"; // Importa o módulo fs para realizar operações com o sistema de arquivos
import { getTodosPosts, criarPost } from "../models/postModel.js"; // Importa funções para obter todos os posts e criar um novo post do modelo de post

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
  // Obtém todos os posts do banco de dados
  const posts = await getTodosPosts();
  // Envia uma resposta HTTP com status 200 (sucesso) e os posts no formato JSON
  res.status(200).json(posts);
}

// Função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post do corpo da requisição
  const novoPost = req.body;

  try {
    // Tenta criar o novo post no banco de dados
    const postCriado = await criarPost(novoPost);
    // Envia uma resposta HTTP com status 200 (sucesso) e o post criado no formato JSON
    res.status(200).json(postCriado);
  } catch (erro) {
    // Caso ocorra um erro, loga a mensagem de erro no console
    console.error(erro.message);
    // Envia uma resposta HTTP com status 500 (erro interno do servidor) e uma mensagem de erro genérica
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}

// Função assíncrona para fazer upload de imagem e criar um novo post
export async function uploadImagem(req, res) {
  // Cria um objeto com os dados do novo post, incluindo o nome da imagem
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };

  try {
    // Tenta criar o novo post no banco de dados
    const postCriado = await criarPost(novoPost);
    // Cria um novo nome para a imagem com o ID do post
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // Renomeia o arquivo da imagem para o novo nome
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia uma resposta HTTP com status 200 (sucesso) e o post criado no formato JSON
    res.status(200).json(postCriado);
  } catch (erro) {
    // Caso ocorra um erro, loga a mensagem de erro no console
    console.error(erro.message);
    // Envia uma resposta HTTP com status 500 (erro interno do servidor) e uma mensagem de erro genérica
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}