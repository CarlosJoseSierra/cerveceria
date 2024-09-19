import { Router } from "express";
import {
  getMarcas,
  createNewMarca,
  getMarcaById,
  updateMarcaById
} from "../controllers/marca.controller";

const router = Router();

router.get("/marcas", getMarcas);

router.get("/marcas/:id", getMarcaById);

router.post("/marcas/new", createNewMarca);

router.put("/marcas/x/:id", updateMarcaById);

export default router;
