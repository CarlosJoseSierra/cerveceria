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
  getInstalacionById,
  getSubCanal,
  getSubCanalById,
  getAtencion,
  getAtencionById,
  getNumCuerpos,
  getNumCuerposById
} from "../controllers/logos.controller";

const router = Router();

router.get("/logos", getLogos);
router.get("/logos/:id", getLogoById);
router.get("/logosSE", getSubEstado);
router.get("/logosSE/:id", getSubEstadoById);
router.get("/logosC", getCanal);
router.get("/logosC/:id", getCanalById);
router.get("/logosSC", getSubCanal);
router.get("/logosSC/:id", getSubCanalById);
router.get("/logosA", getAtencion);
router.get("/logosA/:id", getAtencionById);
router.get("/logosV", getVendedor);
router.get("/logosV/:id", getVendedorById);
router.get("/logosSU", getSupervisor);
router.get("/logosSU/:id", getSupervisorById);
router.get("/logosSE", getSegmento);
router.get("/logosSE/:id", getSegmentoById);
router.get("/logosSS", getSubsegmentacion);
router.get("/logosSS/:id", getSubsegmentacionById);
router.get("/logosTE", getTipoEquipo);
router.get("/logosTE/:id", getTipoEquipoById);
router.get("/logosNC", getNumCuerpos);
router.get("/logosNC/:id", getNumCuerposById);
router.get("/logosCO", getCondicion);
router.get("/logosCO/:id", getCondicionById);
router.get("/logosI", getInstalacion);
router.get("/logosI/:id", getInstalacionById);

export default router;
