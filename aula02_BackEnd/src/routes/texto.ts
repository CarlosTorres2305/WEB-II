import {Router} from "express";
import Texto from "../controllers/Texto";

const routes = Router()

routes.get('/', Texto.concatenar);
routes.post('/', Texto.inverter);

export default routes;

