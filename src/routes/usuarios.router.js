import { Router } from "express";
import {
  getUsuarios,
  createNewUser,
  getByUserPass,
  updateUserById,
} from "../controllers/usuarios.controller";

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios/login", getByUserPass);
router.post("/usuarios/new", createNewUser);
router.put("/usuarios/x/:id", updateUserById);


export default router;
