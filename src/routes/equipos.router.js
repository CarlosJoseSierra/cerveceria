import { Router } from "express";
import {
  getEquipos,
  getEquipoById,
  createNewEquipo,
  updateEquipoById  
} from "../controllers/equipos.controller";

const router = Router();

router.get("/equipos", getEquipos);

router.get("/equipos/:id", getEquipoById);

router.post("/equipos/new", createNewEquipo);

router.put("/equipos/x/:id", updateEquipoById);


export default router;
