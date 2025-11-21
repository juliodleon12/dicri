const IIndicioRepository = require("../../domain/repositories/IIndicioRepository");
const { executeSP } = require("../db/executeSP");

class IndicioRepository extends IIndicioRepository {
  constructor() {
    super();
  }

  async create(dto) {
    const result = await executeSP("sp_Indicio_Insert", {
      ExpedienteId: dto.expedienteId,
      Descripcion: dto.descripcion,
      Color: dto.color,
      Tamano: dto.tamano,
      Peso: dto.peso,
      Ubicacion: dto.ubicacion,
      TecnicoId: dto.tecnicoId,
    });

    return result[0];
  }

  async getByExpediente(expedienteId) {
    return await executeSP("sp_Indicio_GetByExpediente", {
      ExpedienteId: expedienteId,
    });
  }
}

module.exports = IndicioRepository;
