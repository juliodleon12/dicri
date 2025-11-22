class IndicioDTO {
  constructor({
    expedienteId,
    descripcion,
    color,
    tamano,
    peso,
    ubicacion,
    tecnicoId,
  }) {
    if (!expedienteId) throw new Error("El expediente es obligatorio");
    if (!tecnicoId) throw new Error("El técnico es obligatorio");

    this.expedienteId = expedienteId;
    this.descripcion = descripcion || "";
    this.color = color || "";
    this.tamano = tamano || "";
    this.peso = peso || "";
    this.ubicacion = ubicacion || "";
    this.tecnicoId = tecnicoId;
  }
}

module.exports = IndicioDTO;
