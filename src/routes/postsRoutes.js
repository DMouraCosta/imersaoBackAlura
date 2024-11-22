// Importa o framework Express para criar a aplicação web
import express from "express";

// Importa o middleware Multer para lidar com uploads de arquivos
import multer from "multer";

// Importa funções controladoras de posts do arquivo postController.js
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js";

import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000", 
  optionsSuccessStatus: 200
};


// Configuração de armazenamento Multer (específico para Windows)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para arquivos enviados (ajuste o caminho se necessário)
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo enviado
    cb(null, file.originalname);
  }
});

// Cria uma instância do Multer com o armazenamento configurado
const upload = multer({ dest: "./uploads", storage });

// Define uma função para configurar as rotas da aplicação
const routes = (app) => {

  // Habilita o parseamento de dados JSON na requisição para rotas específicas
  app.use(express.json());

  app.use(cors(corsOptions));

  // Manipulador de requisição GET para "/posts" (provavelmente lista posts)
  app.get("/posts", listarPosts);

  // Manipulador de requisição POST para "/posts" (provavelmente cria um novo post)
  app.post("/posts", postarNovoPost);

  // Manipulador de requisição POST para "/upload" com middleware Multer
  // Essa rota espera um arquivo chamado "imagem" no corpo da requisição
  app.post("/upload", upload.single("imagem"), uploadImagem); // Use upload.single para upload de arquivo único

  app.put("/upload/:id", atualizarNovoPost);
};

// Exporta a função de rotas para uso no arquivo principal da aplicação
export default routes;