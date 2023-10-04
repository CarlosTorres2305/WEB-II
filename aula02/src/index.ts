import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.port || 3000;

const app = express();
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`);
});

//define a rota para a raiz GET/
/*app.get("/soma/:x/:y", (req, res) => {
    const {x,y} = req.params;
    //os parametros são recebidos como string
    const xx = parseInt(x);
    const yy = parseInt(y);
    res.send(`Resposta: ${xx + yy}`);
})*/
app.get("/soma", (req, res) => {
    //os parametros da requisição são colocados na propriedade body
    const {x,y} = req.body;
    res.send(`Soma: ${x + y}`);
});

//utilizando método all
app.all("/tudo", function (req, res){
    let {x, y} = req.body;
    res.send(`ALL ${x} e ${y}`);
});

//define a rota para GET /teste
app.get("/teste", (req, res) => res.send("Método HTTP GET"));
//define a rota para POST /teste
app.post("/teste", (req, res) => res.send("Método HTTP POST"));
//define  a rota para PUT /teste
app.put("/teste", (req, res) => res.send("Método HTTP PUT"));
//define a rota para DELETE /teste
app.delete("/teste", (req, res) => res.send("Método HTTP DELETE"));