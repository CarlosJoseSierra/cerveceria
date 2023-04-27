"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _info = require("../controllers/info.controller");
var router = (0, _express.Router)();
router.post("/info", _info.getByInfo);
var _default = router;
exports["default"] = _default;