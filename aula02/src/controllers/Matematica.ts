import {Request, Response } from 'express';

class Matematica{
    public async somar(req:Request,res:Response): Promise<Response>{
        let {x,y} = req.body;
        const r = parseFloat(x) + parseFloat(y);
        if (isNaN(r)){
            return res.json({error:"Parâmetros incorretos"});
        }
        return res.json({r});
    }

    public async subtrair(req:Request, res:Response): Promise<Response>{
        let {x,y} = req.body;
        const r = parseFloat(x) - parseFloat(y);
        if( isNaN(r)){
            return res.json({error:"Parâmetros incorretos"});
        }
        return res.json({r});
    }
}

export default new Matematica(); //exporta o objeto do tipo de dado Matematica