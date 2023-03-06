import { Router } from "express";
import {
  getMarcas,
  createNewMarca,
} from "../controllers/marca.controller";

const router = Router();

router.get("/marcas", getMarcas);

router.post("/activos/new", createNewMarca);

export default router;
