import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/routes/postsRoutes.js"; // Importa as rotas definidas no arquivo postsRoutes.js

const app = express(); // Cria uma instância do Express, que será nossa aplicação

app.use(express.static("uploads"));

routes(app); // Passa a instância da aplicação para o módulo de rotas, configurando as rotas da aplicação

app.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log("Servidor escutando..."); // Mensagem de log indicando que o servidor está rodando
});