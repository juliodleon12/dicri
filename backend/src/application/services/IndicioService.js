class IndicioService {
  constructor(indicioRepository, expedienteRepository) {
    this.indicioRepository = indicioRepository;
    this.expedienteRepository = expedienteRepository;
  }

  async agregarIndicio(dto) {
    // Verificar que el expediente exista
    const expediente = await this.expedienteRepository.getById(dto.expedienteId);
    if (!expediente) throw new Error("El expediente no existe");

    // No permitir agregar indicios a expediente aprobado/rechazado
    if (["APROBADO", "RECHAZADO"].includes(expediente.Estado)) {
      throw new Error("No puede agregar indicios a un expediente cerrado");
    }

    return await this.indicioRepository.create(dto);
  }

  async obtenerIndiciosPorExpediente(expedienteId) {
    return await this.indicioRepository.getByExpediente(expedienteId);
  }
}

module.exports = IndicioService;
