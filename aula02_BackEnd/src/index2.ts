import express from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

//será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;

//cria o servicdor e coloca na variavel app
const app = express();

//para aceitar parâmetros no formato JSON
app.use(express.json());

//inicializa o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

//define a rota para o pacote /routes
app.use(routes);