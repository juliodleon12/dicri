class ExpedienteDTO {
  constructor({ codigo, tecnicoId }) {
    if (!codigo) throw new Error("El código del expediente es obligatorio");
    if (!tecnicoId) throw new Error("El técnico que registra es obligatorio");

    this.codigo = codigo;
    this.tecnicoId = tecnicoId;
  }
}

module.exports = ExpedienteDTO;
