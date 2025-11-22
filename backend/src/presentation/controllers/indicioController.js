const IndicioDTO = require("../../application/dto/IndicioDTO");

class IndicioController {
  constructor(indicioService) {
    this.indicioService = indicioService;
  }

  crear = async (req, res) => {
    try {
      const dto = new IndicioDTO(req.body);
      const result = await this.indicioService.agregarIndicio(dto);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  listarPorExpediente = async (req, res) => {
    try {
      const expedienteId = parseInt(req.params.id);
      const result = await this.indicioService.obtenerIndiciosPorExpediente(expedienteId);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = IndicioController;
