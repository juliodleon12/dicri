const express = require("express");
const UsuarioController = require("../controllers/usuarioController");
const usuarioRepository = require("../../infrastructure/repositories/UsuarioRepository");
const UsuarioService = require("../../application/services/UsuarioService");

const router = express.Router();

const repo = new usuarioRepository();
const service = new UsuarioService(repo);
const controller = new UsuarioController(service);

router.post("/login", controller.login);
router.get("/", controller.getAll);
router.post("/", controller.create);

module.exports = router;
