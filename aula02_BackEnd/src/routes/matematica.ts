import {Router } from "express";
import Matematica from "../controllers/Matematica";

const routes = Router();

routes.get('/', Matematica.somar);
routes.post('/', Matematica.subtrair);

export default routes;