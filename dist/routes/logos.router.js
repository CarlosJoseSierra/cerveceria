"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _logos = require("../controllers/logos.controller");
var router = (0, _express.Router)();
router.get("/logos", _logos.getLogos);
router.get("/logos/:id", _logos.getLogoById);
router.get("/logosSE", _logos.getSubEstado);
router.get("/logosSE/:id", _logos.getSubEstadoById);
router.get("/logosC", _logos.getCanal);
router.get("/logosC/:id", _logos.getCanalById);
router.get("/logosSC", _logos.getSubCanal);
router.get("/logosSC/:id", _logos.getSubCanalById);
router.get("/logosA", _logos.getAtencion);
router.get("/logosA/:id", _logos.getAtencionById);
//router.get("/logosV", getVendedor);
//router.get("/logosV/:id", getVendedorById);
//router.get("/logosSU", getSupervisor);
//router.get("/logosSU/:id", getSupervisorById);
router.get("/logosSEG", _logos.getSegmento);
router.get("/logosSEG/:id", _logos.getSegmentoById);
router.get("/logosSS", _logos.getSubsegmentacion);
router.get("/logosSS/:id", _logos.getSubsegmentacionById);
router.get("/logosTE", _logos.getTipoEquipo);
router.get("/logosTE/:id", _logos.getTipoEquipoById);
router.get("/logosNC", _logos.getNumCuerpos);
router.get("/logosNC/:id", _logos.getNumCuerposById);
router.get("/logosCO", _logos.getCondicion);
router.get("/logosCO/:id", _logos.getCondicionById);
router.get("/logosI", _logos.getInstalacion);
router.get("/logosI/:id", _logos.getInstalacionById);
router.get("/logosPR", _logos.getProvincia);
var _default = router;
exports["default"] = _default;