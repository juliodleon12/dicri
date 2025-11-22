class ExpedienteService {
  constructor(expedienteRepository, indicioRepository) {
    this.expedienteRepository = expedienteRepository;
    this.indicioRepository = indicioRepository;
  }

  async crearExpediente(dto) {
    return await this.expedienteRepository.create(dto);
  }

  async listarExpedientes() {
    return await this.expedienteRepository.getAll();
  }

  async obtenerExpediente(id) {
    const expediente = await this.expedienteRepository.getById(id);
    if (!expediente) throw new Error("Expediente no encontrado");
    return expediente;
  }

  async cambiarEstado(id, estado, justificacion, usuarioRol) {
    // Validaciones de rol
    if (estado === "APROBADO" || estado === "RECHAZADO") {
      if (usuarioRol !== "Coordinador") {
        throw new Error("Solo un coordinador puede aprobar o rechazar");
      }
    }

    // Validación de justificación
    if (estado === "RECHAZADO" && !justificacion) {
      throw new Error("Debe ingresar una justificación para el rechazo");
    }

    return await this.expedienteRepository.updateEstado(
      id,
      estado,
      justificacion || null
    );
  }

  async reportes(fechaInicio, fechaFin, estado) {
    return await this.expedienteRepository.getReportes(
      fechaInicio,
      fechaFin,
      estado
    );
  }
}

module.exports = ExpedienteService;
