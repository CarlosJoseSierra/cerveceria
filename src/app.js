import express from "express";
import cors from "cors";
import activoRoutes from "./routes/activos.router.js";
import cargoRoutes from "./routes/cargos.router";
import equipoRoutes from "./routes/equipos.router.js";
import rolRoutes from "./routes/roles.routes";
import usuarioRoutes from "./routes/usuarios.router.js";
import historialRoutes from "./routes/historial.router.js";
import modeloRoutes from "./routes/modelos.router.js";
import logoRoutes from "./routes/logos.router.js";
import solicitudRoutes from "./routes/solicitudExterna.router.js";

//import morgan from "morgan";
//import config from "./config.js";

const app = express();

// Middlewares
app.use(cors());
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.use("/api", rolRoutes);
app.use("/api", activoRoutes);
app.use("/api", cargoRoutes);
app.use("/api", equipoRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", historialRoutes);
app.use("/api", modeloRoutes);
app.use("/api", logoRoutes);
app.use("/api", solicitudRoutes);
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
});

export default app;
