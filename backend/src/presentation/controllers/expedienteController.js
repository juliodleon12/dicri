const ExpedienteDTO = require("../../application/dto/ExpedienteDTO");

class ExpedienteController {
  constructor(expedienteService) {
    this.expedienteService = expedienteService;
  }

  crear = async (req, res) => {
    try {
      const dto = new ExpedienteDTO(req.body);
      const expediente = await this.expedienteService.crearExpediente(dto);
      res.status(201).json(expediente);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  listar = async (req, res) => {
    try {
      const data = await this.expedienteService.listarExpedientes();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  obtener = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const expediente = await this.expedienteService.obtenerExpediente(id);
      res.json(expediente);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };

  cambiarEstado = async (req, res) => {
    try {
      const { estado, justificacion } = req.body;
      const id = parseInt(req.params.id);
      const rol = req.user.rol;

      await this.expedienteService.cambiarEstado(id, estado, justificacion, rol);

      res.json({ message: "Estado actualizado" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  reportes = async (req, res) => {
    try {
      const { fechaInicio, fechaFin, estado } = req.query;
      const data = await this.expedienteService.reportes(fechaInicio, fechaFin, estado);
      res.json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
}

module.exports = ExpedienteController;
