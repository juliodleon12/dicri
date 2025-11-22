const LoginDTO = require("../../application/dto/LoginDTO");

class UsuarioController {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }

  login = async (req, res) => {
    try {
      const dto = new LoginDTO(req.body);
      const result = await this.usuarioService.login(dto);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  getAll = async (req, res) => {
    try {
      const usuarios = await this.usuarioService.getAll();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = UsuarioController;
