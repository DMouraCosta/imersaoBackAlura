// importando modulos
import express from "express";

const app = express();

app.listen(3000, ()=>{
    console.log("Servidor escutando...");
});

// Criando rota
app.get("/api", (req, res)=>{
    res.status(200).send("Boas vindas à imersão!");
});