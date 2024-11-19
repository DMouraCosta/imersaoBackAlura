// importando modulos
import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Gato me olhando",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/300"
    },
    {
        id: 3,
        descricao: "Paisagem com um pôr do sol incrível",
        imagem: "https://source.unsplash.com/random/400x300/?sunset"
    },
    {
        id: 4,
        descricao: "Cachorro correndo na praia",
        imagem: "https://source.unsplash.com/random/400x300/?dog,beach"
    },
    {
        id: 5,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://source.unsplash.com/random/400x300/?food"
    },
    {
        id: 6,
        descricao: "Montanhas nevadas e majestosas",
        imagem: "https://source.unsplash.com/random/400x300/?mountains"
    }
  ];

const app = express();

//convertendo texto para json
app.use(express.json());

//servidor escutando
app.listen(3000, ()=>{
    console.log("Servidor escutando...");
});

// Criando rotas
app.get("/posts", (req, res)=>{
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    // percorre o array objeto por objeto e retorna como numero
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });

}

app.get("/posts/:id", (req, res)=>{
    // requisição para o endpoint para buscar os ID
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});