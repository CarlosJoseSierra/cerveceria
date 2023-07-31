import { Router } from "express";
import {
  getHistReparados,
  getHistDisponibles,
  getHistEntregados,
  getTopFiveItems,
  getHistorialEquipo,
  getHistorialEquipoReparado,
  getHistorialEquipoDisponible,
  getTotalEquiposMapa,
  getTopFiveVendedores,
  getHistorialTotalEquipoEntregado,
  getDataTopFiveVendedores,
  getHistTotalEntregado,
  getHistTotalReparado,
  getHistTotalDisponible,

} from "../controllers/historial.controller";

const router = Router();

router.get("/historial1/:id/:id2", getHistReparados);
router.get("/historial2/:id/:id2", getHistDisponibles);
router.get("/historial3/:id/:id2", getHistEntregados);
router.get("/historial/:id/:id2", getTopFiveItems);
router.get("/historials", getDataTopFiveVendedores);
router.get("/historial4/:id", getHistorialEquipo);
router.get("/historial5/:id/:id2", getHistorialEquipoReparado);
router.get("/historial6/:id/:id2", getHistorialEquipoDisponible);

//totales de la grafica del area delDashboard
router.get("/historialx", getTotalEquiposMapa);
router.get("/historialy", getTopFiveVendedores);
router.get("/historialz", getHistorialTotalEquipoEntregado);
//La parte de abajo del dashboard
router.get("/historial4z", getHistTotalEntregado);
router.get("/historial5x", getHistTotalReparado);
router.get("/historial6y", getHistTotalDisponible);
router.get("/historial7y", getEtiquetas);



export default router;