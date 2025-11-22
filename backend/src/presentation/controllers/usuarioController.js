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

  create = async (req, res) => {
    try {
      const { nombre, email, password, rol } = req.body;
      const created = await this.usuarioService.createUser({ nombre, email, password, rol });
      res.status(201).json(created);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };  
}

module.exports = UsuarioController;
