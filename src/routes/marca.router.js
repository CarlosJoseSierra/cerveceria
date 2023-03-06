import { Router } from "express";
import {
  getMarcas,
  createNewMarca,
} from "../controllers/marca.controller";

const router = Router();

router.get("/marcas", getMarcas);

router.post("/marcas/new", createNewMarca);

export default router;
