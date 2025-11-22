require("dotenv").config();
const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json"));

const { connectDB } = require("./infrastructure/db/connection");

// Rutas
const usuarioRoutes = require("./presentation/routes/usuarioRoutes");
const expedienteRoutes = require("./presentation/routes/expedienteRoutes");
const indicioRoutes = require("./presentation/routes/indicioRoutes");

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await connectDB();
    console.log("SQL Server conectado");

    // Rutas
    app.use("/api/usuarios", usuarioRoutes);
    app.use("/api/expedientes", expedienteRoutes);
    app.use("/api/indicios", indicioRoutes);
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
  } catch (error) {
    console.error("Error inicializando la API:", error);
  }
})();
