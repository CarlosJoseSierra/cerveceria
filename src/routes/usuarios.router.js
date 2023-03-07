import { Router } from "express";
import {
  getUsuarios,
  createNewUser,
  getByUserPass,
  updateUserById,
  getUserById,
  getVendedores,
} from "../controllers/usuarios.controller";

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios/login", getByUserPass);
router.post("/usuarios/new", createNewUser);
router.put("/usuarios/x/:id", updateUserById);
router.get("/usuarios/y/:id", getUserById);
router.get("/usuarios/z/",getVendedores);

export default router;
