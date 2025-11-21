require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./infrastructure/db/connection");

// Rutas
const expedienteRoutes = require("./presentation/routes/expedienteRoutes");
const indicioRoutes = require("./presentation/routes/indicioRoutes");
const usuarioRoutes = require("./presentation/routes/usuarioRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a SQL Server
connectDB()
  .then(() => console.log("SQL Server conectado"))
  .catch(err => console.error("Error SQL", err));

// Rutas
app.use("/api/expedientes", expedienteRoutes);
app.use("/api/indicios", indicioRoutes);
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));



