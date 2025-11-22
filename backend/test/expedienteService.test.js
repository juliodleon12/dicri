const ExpedienteService = require("../src/application/services/ExpedienteService");

test("No debe permitir cambiar estado sin rol coordinador", async () => {
  const mockRepo = {
    updateEstado: jest.fn(),
  };

  const mockInd = {};
  const service = new ExpedienteService(mockRepo, mockInd);

  await expect(
    service.cambiarEstado(1, "APROBADO", null, "Tecnico")
  ).rejects.toThrow("Solo un coordinador puede aprobar o rechazar");
});
