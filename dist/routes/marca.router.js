"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _marca = require("../controllers/marca.controller");
var router = (0, _express.Router)();
router.get("/marcas", _marca.getMarcas);
router.get("/marcas/:id", _marca.getMarcaById);
router.post("/marcas/new", _marca.createNewMarca);
router.put("/marcas/x/:id", _marca.updateMarcaById);
var _default = router;
exports["default"] = _default;