"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _vendedor = require("../controllers/vendedor.controller");
var router = (0, _express.Router)();
router.get("/vendedor", _vendedor.getVendedor);
router.get("/vendedor/:id", _vendedor.getVendedorById);
router.post("/vendedor/new", _vendedor.createNewVendedor);
router.put("/vendedor/x/:id", _vendedor.updateVendedorById);
var _default = router;
exports["default"] = _default;