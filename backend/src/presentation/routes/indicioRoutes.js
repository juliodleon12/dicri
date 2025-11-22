const express = require("express");

const IndicioController = require("../controllers/indicioController");
const IndicioRepository = require("../../infrastructure/repositories/IndicioReposiroty");
const ExpedienteRepository = require("../../infrastructure/repositories/ExpedienteRepository");

const IndicioService = require("../../application/services/IndicioService");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

// DI
const indicioRepo = new IndicioRepository();
const expedienteRepo = new ExpedienteRepository();
const service = new IndicioService(indicioRepo, expedienteRepo);
const controller = new IndicioController(service);

router.post("/", auth, controller.crear);
router.get("/:id", auth, controller.listarPorExpediente);

module.exports = router;
