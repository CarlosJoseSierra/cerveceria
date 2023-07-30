import { Router } from "express";
import {
  getUbicacion,
} from "../controllers/ubicacion.controller";

const router = Router();

router.get("/ubicacion", getUbicacion);

export default router;
