CREATE PROCEDURE sp_Indicio_GetByExpediente
    @ExpedienteId INT
AS
BEGIN
    SELECT Id, ExpedienteId, Descripcion, Color, Tamano, Peso, Ubicacion, TecnicoId, FechaRegistro
    FROM Indicio
    WHERE ExpedienteId = @ExpedienteId
    ORDER BY FechaRegistro;
END
GO
