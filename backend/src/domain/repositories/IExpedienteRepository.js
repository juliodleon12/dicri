class IExpedienteRepository {
  create(expedienteDTO) {
    throw new Error("Not implemented");
  }

  getAll() {
    throw new Error("Not implemented");
  }

  getById(id) {
    throw new Error("Not implemented");
  }

  updateEstado(id, estado, justificacion) {
    throw new Error("Not implemented");
  }

  getReportes(fInicio, fFin, estado) {
    throw new Error("Not implemented");
  }
}

module.exports = IExpedienteRepository;
