import { Router } from "express";
import {
  getVendedor,
  getVendedorById,
  createNewVendedor,
  updateVendedorById  
} from "../controllers/vendedor.controller";

const router = Router();

router.get("/vendedor", getVendedor);

router.get("/vendedor/:id", getVendedorById);

router.post("/vendedor/new", createNewVendedor);

router.put("/vendedor/x/:id", updateVendedorById);


export default router;
