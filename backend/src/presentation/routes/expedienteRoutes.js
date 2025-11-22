const express = require("express");
const ExpedienteController = require("../controllers/expedienteController");

const ExpedienteRepository = require("../../infrastructure/repositories/ExpedienteRepository");
const IndicioRepository = require("../../infrastructure/repositories/IndicioReposiroty");

const ExpedienteService = require("../../application/services/ExpedienteService");

const auth = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");

const router = express.Router();

// DI
const expedienteRepo = new ExpedienteRepository();
const indicioRepo = new IndicioRepository();
const service = new ExpedienteService(expedienteRepo, indicioRepo);
const controller = new ExpedienteController(service);

// Rutas
router.post("/", auth, controller.crear);
router.get("/", auth, controller.listar);
router.get("/:id", auth, controller.obtener);

// Solo coordinador puede aprobar/rechazar
router.put("/:id/estado", auth, controller.cambiarEstado);

router.get("/reportes/data", auth, controller.reportes);

module.exports = router;
