import { Router } from "express";
import {
  getLogos,
  getLogoById,
  getCanal,
  getCanalById,
  getVendedor,
  getVendedorById,
  getSubEstado,
  getSubEstadoById,
  getSegmento,
  getSegmentoById,
  getSupervisor,
  getSupervisorById,
  getSubsegmentacion,
  getSubsegmentacionById,
  getTipoEquipo,
  getTipoEquipoById,
  getCondicion,
  getCondicionById,
  getInstalacion,
  getInstalacionById
} from "../controllers/logos.controller";

const router = Router();

router.get("/logos", getLogos);
router.get("/logos/:id", getLogoById);
router.get("/logosc", getCanal);
router.get("/logosc/:id", getCanalById);
router.get("/logosv", getVendedor);
router.get("/logosv/:id", getVendedorById);
router.get("/logossc", getSubEstado);
router.get("/logossc/:id", getSubEstadoById);
router.get("/logosse", getSegmento);
router.get("/logosse/:id", getSegmentoById);
router.get("/logossu", getSupervisor);
router.get("/logossu/:id", getSupervisorById);
router.get("/logosss", getSubsegmentacion);
router.get("/logosss/:id", getSubsegmentacionById);
router.get("/logoste", getTipoEquipo);
router.get("/logoste/:id", getTipoEquipoById);
router.get("/logosco", getCondicion);
router.get("/logosco/:id", getCondicionById);
router.get("/logosi", getInstalacion);
router.get("/logosi/:id", getInstalacionById);

export default router;
