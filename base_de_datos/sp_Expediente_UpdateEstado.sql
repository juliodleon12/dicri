CREATE PROCEDURE sp_Expediente_UpdateEstado
    @Id INT,
    @Estado NVARCHAR(20),
    @Justificacion NVARCHAR(MAX) = NULL
AS
BEGIN
    UPDATE Expediente
    SET Estado = @Estado,
        JustificacionRechazo = @Justificacion
    WHERE Id = @Id;
END
GO
