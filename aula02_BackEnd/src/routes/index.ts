import{Router, Request, Response} from "express";
import matematica from './matematica';
import texto from './texto';

const routes = Router();

routes.use("/matematica", matematica);
routes.use("/texto", texto);

//aceita qualquer método HTTP ou URL
routes.use((req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) )

export default routes;