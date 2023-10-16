import express, {Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
dotenv.config();

//será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;
const app = express(); //cria a servidor e coloca na variável app
//suportar parâmetros JSON no body da requisição
app.use(express.json());
//inicializa o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});


/* EXEMPLO - const objetivo = (req: Request, res: Response) => res.send("Resposta");

app.get("/um", objetivo);

const intermediaria = (req: Request, res: Response, next: NextFunction) => {
    next(); //chama a próxima função ou rota
}

app.get("/dois", intermediaria, objetivo);

const inter1 = (req: Request, res: Response, next: NextFunction) => {
    next(); //chama a próxima função ou rota
}

const inter2 = (req: Request, res: Response, next: NextFunction) => {
    next(); //chama a próxima função ou rota
}

app.get("/tres", inter1, inter2, inter1, inter2, objetivo);*/

/* EXEMPLO - const validar = (req: Request, res: Response, next: NextFunction) => {
    const {senha} = req.body;
    if(senha && senha === "123"){
        return next(); //chama a próxima função ou rota
    }
    //resposta com HTTP Method 401 (unauthorized)
    return res.status(401).send({error:"Não autorizado"});
};

const objetivo = (req: Request, res: Response) => {
    res.send({Situacao: "logado"});
}*/

const validar = (req: Request, res: Response, next: NextFunction) => {
    const {senha} = req.body; //obtém a propriedade senha do body da requisição
    if( senha && senha === "123"){
        //passa os dados pelo res.locals para o próximo nível da middleware
        res.locals = {status:"logado"};
        return next(); //chama a próxima função ou rota
    }
    //resposta com HTTP Method 401 (unauthorized)
    return res.status(401).send({error:"Não autorizado"});
};

const objetivo = (req: Request, res: Response) => {
    //obtém os dados do nível anterior da middleware que foram armazenados no objeto locals
    const {status} = res.locals;
    res.send({situacao: status});
}

app.get("/logar", validar, objetivo)


