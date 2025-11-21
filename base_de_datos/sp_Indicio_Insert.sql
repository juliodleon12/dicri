CREATE PROCEDURE sp_Indicio_Insert
    @ExpedienteId INT,
    @Descripcion NVARCHAR(500),
    @Color NVARCHAR(100),
    @Tamano NVARCHAR(100),
    @Peso NVARCHAR(100),
    @Ubicacion NVARCHAR(200),
    @TecnicoId INT
AS
BEGIN
    INSERT INTO Indicio (ExpedienteId, Descripcion, Color, Tamano, Peso, Ubicacion, TecnicoId)
    VALUES (@ExpedienteId, @Descripcion, @Color, @Tamano, @Peso, @Ubicacion, @TecnicoId);

    SELECT SCOPE_IDENTITY() AS Id;
END
GO
