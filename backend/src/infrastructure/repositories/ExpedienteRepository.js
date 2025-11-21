const IExpedienteRepository = require("../../domain/repositories/IExpedienteRepository");
const { executeSP } = require("../db/executeSP");

class ExpedienteRepository extends IExpedienteRepository {
  constructor() {
    super();
  }

  async create(dto) {
    const result = await executeSP("sp_Expediente_Insert", {
      Codigo: dto.codigo,
      TecnicoId: dto.tecnicoId,
    });

    return result[0];
  }

  async getAll() {
    return await executeSP("sp_Expediente_Get");
  }

  async getById(id) {
    const result = await executeSP("sp_Expediente_GetById", { Id: id });
    return result[0] || null;
  }

  async updateEstado(id, estado, justificacion) {
    await executeSP("sp_Expediente_UpdateEstado", {
      Id: id,
      Estado: estado,
      Justificacion: justificacion,
    });

    return true;
  }

  async getReportes(fi, ff, estado) {
    return await executeSP("sp_Expediente_GetReportes", {
      FechaInicio: fi,
      FechaFin: ff,
      Estado: estado || null,
    });
  }
}

module.exports = ExpedienteRepository;
