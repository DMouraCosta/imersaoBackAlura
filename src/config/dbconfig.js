import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
  // Cria um cliente MongoDB
  let mongoClient;

  try {
    // Cria uma nova instância do cliente MongoDB usando a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');

    // Tenta estabelecer a conexão com o banco de dados
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para futuras operações
    return mongoClient;
  } catch (erro) {
    // Caso ocorra um erro durante a conexão, exibe uma mensagem de erro no console e encerra o processo
    console.error('Falha na conexão com o banco!', erro);
    process.exit();
  }
}