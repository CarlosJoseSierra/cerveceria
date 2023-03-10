"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _activosRouter = _interopRequireDefault(require("./routes/activos.router.js"));
var _cargos = _interopRequireDefault(require("./routes/cargos.router"));
var _equiposRouter = _interopRequireDefault(require("./routes/equipos.router.js"));
var _roles = _interopRequireDefault(require("./routes/roles.routes"));
var _usuariosRouter = _interopRequireDefault(require("./routes/usuarios.router.js"));
var _historialRouter = _interopRequireDefault(require("./routes/historial.router.js"));
var _modelosRouter = _interopRequireDefault(require("./routes/modelos.router.js"));
var _logosRouter = _interopRequireDefault(require("./routes/logos.router.js"));
var _solicitudExternaRouter = _interopRequireDefault(require("./routes/solicitudExterna.router.js"));
var _marcaRouter = _interopRequireDefault(require("./routes/marca.router.js"));
var _localizacionRouter = _interopRequireDefault(require("./routes/localizacion.router.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import morgan from "morgan";
//import config from "./config.js";

var app = (0, _express["default"])();

// Middlewares
app.use((0, _cors["default"])());
//app.use(morgan("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());

// Routes

app.use("/api", _roles["default"]);
app.use("/api", _activosRouter["default"]);
app.use("/api", _cargos["default"]);
app.use("/api", _equiposRouter["default"]);
app.use("/api", _usuariosRouter["default"]);
app.use("/api", _historialRouter["default"]);
app.use("/api", _modelosRouter["default"]);
app.use("/api", _logosRouter["default"]);
app.use("/api", _solicitudExternaRouter["default"]);
app.use("/api", _marcaRouter["default"]);
app.use("/api", _localizacionRouter["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'endpoint not found'
  });
});
var _default = app;
exports["default"] = _default;