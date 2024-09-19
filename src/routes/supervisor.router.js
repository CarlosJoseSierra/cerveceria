import { Router } from "express";
import {
  getSupervisor,
  getSupervisorById,
  createNewSupervisor,
  updateSupervisorById  
} from "../controllers/supervisor.controller";

const router = Router();

router.get("/supervisor", getSupervisor);

router.get("/supervisor/:id", getSupervisorById);

router.post("/supervisor/new", createNewSupervisor);

router.put("/supervisor/x/:id", updateSupervisorById);


export default router;
