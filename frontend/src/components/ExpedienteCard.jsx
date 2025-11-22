import React from "react";

export default function ExpedienteCard({ expediente, onSelect }) {
  return (
    <div
      onClick={() => onSelect(expediente)}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        backgroundColor: "#fafafa",
        cursor: "pointer",
      }}
    >
      <h3 style={{ marginBottom: "5px" }}>
        Expediente #{expediente.Id} — {expediente.Codigo}
      </h3>

      <p>
        <strong>Estado:</strong>{" "}
        <span
          style={{
            padding: "2px 8px",
            borderRadius: "5px",
            color: "white",
            backgroundColor:
              expediente.Estado === "APROBADO"
                ? "green"
                : expediente.Estado === "RECHAZADO"
                ? "red"
                : expediente.Estado === "EN_REVISION"
                ? "orange"
                : "gray",
          }}
        >
          {expediente.Estado}
        </span>
      </p>

      <p>
        <strong>Fecha registro:</strong>{" "}
        {new Date(expediente.FechaRegistro).toLocaleString()}
      </p>

      <p>
        <strong>Técnico:</strong> {expediente.Tecnico}
      </p>
    </div>
  );
}
