import { Router } from "express";
import {
  getActivos,
  createNewActivo,
  updateActivoById,
  getActivoByCodTag,
  getActivosXUsuario,
} from "../controllers/activos.controller";

const router = Router();

router.get("/activos", getActivos);

router.get("/activos/x/:idUsuario", getActivosXUsuario);

router.post("/activos/new", createNewActivo);

//router.get("/activos/count", getTotalActivos);

//router.get("/activos/:id", getActivoById);

router.get("/activos1/:EQC_codTag", getActivoByCodTag);

//router.delete("/activos/:id", deleteActivoById);

router.put("/activos/:id", updateActivoById);

export default router;
