"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _supervisor = require("../controllers/supervisor.controller");
var router = (0, _express.Router)();
router.get("/supervisor", _supervisor.getSupervisor);
router.get("/supervisor/:id", _supervisor.getSupervisorById);
router.post("/supervisor/new", _supervisor.createNewSupervisor);
router.put("/supervisor/x/:id", _supervisor.updateSupervisorById);
var _default = router;
exports["default"] = _default;