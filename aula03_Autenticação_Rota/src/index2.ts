import express, {Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import {authorization, generateToken} from "./autenticacao";
dotenv.config();
//será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;
const app = express();//cria o servidor e coloca na variável app
//suportar parâmetros JSON no body da requisição
app.use(express.json());
//inicaliza o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

const login = async (req: Request, res: Response) => {
    const {mail} = req.body;
    if(mail && mail !== ""){
        const token = await generateToken({mail});
        return res.json({token});
    }
    return res.status(401).send({error:"Não autorizado"});
};

app.get("/logar", login);

const processa = async (req: Request, res: Response) => {
    const {mail} = res.locals;
    res.send({mail});
};

app.get("/validar", authorization, processa);