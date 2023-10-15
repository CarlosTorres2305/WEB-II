import {Request, Response} from 'express';

class Texto{
    public async concatenar(req: Request, res: Response): Promise<Response> {
        let {x, y} = req.body;
        if(x === undefined || y === undefined){
            return res.status(400).send("Parâmetros incorretos");
        }
        const r = x + y;
        return res.json({r});
    }

    public async inverter(req: Request, res:Response): Promise<Response>{
        let {entrada} = req.body;
        if(entrada === undefined){
            return res.status(400).send("Parâmetro incorreto");
        }
        const r = entrada.split('').reverse().join('');
        return res.json({r});
    }
}

export default new Texto(); //exporta o objeto do tipo de dado Texto