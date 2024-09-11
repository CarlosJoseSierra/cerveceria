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
router.get("/logosc", _logos.getCanal);
router.get("/logosc/:id", _logos.getCanalById);
router.get("/logosv", _logos.getVendedor);
router.get("/logosv/:id", _logos.getVendedorById);
router.get("/logossc", _logos.getSubEstado);
router.get("/logossc/:id", _logos.getSubEstadoById);
router.get("/logosse", _logos.getSegmento);
router.get("/logosse/:id", _logos.getSegmentoById);
router.get("/logossu", _logos.getSupervisor);
router.get("/logossu/:id", _logos.getSupervisorById);
router.get("/logosss", _logos.getSubsegmentacion);
router.get("/logosss/:id", _logos.getSubsegmentacionById);
router.get("/logoste", _logos.getTipoEquipo);
router.get("/logoste/:id", _logos.getTipoEquipoById);
router.get("/logosco", _logos.getCondicion);
router.get("/logosco/:id", _logos.getCondicionById);
router.get("/logosi", _logos.getInstalacion);
router.get("/logosi/:id", _logos.getInstalacionById);
var _default = router;
exports["default"] = _default;