CREATE PROCEDURE sp_Expediente_GetById
    @Id INT
AS
BEGIN
    SELECT e.Id, e.Codigo, e.FechaRegistro, e.TecnicoId, e.Estado, e.JustificacionRechazo
    FROM Expediente e
    WHERE e.Id = @Id;
END
GO
