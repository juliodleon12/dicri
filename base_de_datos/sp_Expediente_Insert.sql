CREATE PROCEDURE sp_Expediente_Insert
    @Codigo NVARCHAR(50),
    @TecnicoId INT
AS
BEGIN
    INSERT INTO Expediente (Codigo, TecnicoId)
    VALUES (@Codigo, @TecnicoId);

    SELECT SCOPE_IDENTITY() AS Id;
END
GO