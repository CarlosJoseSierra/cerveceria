import { Router } from "express";
import {
   getByInfo,
} from "../controllers/info.controller";

const router = Router();

router.post("/info", getByInfo);

export default router;
