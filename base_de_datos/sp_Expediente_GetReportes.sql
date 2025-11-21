CREATE PROCEDURE sp_Expediente_GetReportes
    @FechaInicio DATETIME2,
    @FechaFin DATETIME2,
    @Estado NVARCHAR(20) = NULL
AS
BEGIN
    SELECT e.Id, e.Codigo, e.FechaRegistro, e.Estado,
           u.Nombre AS Tecnico
    FROM Expediente e
    INNER JOIN Users u ON u.Id = e.TecnicoId
    WHERE e.FechaRegistro BETWEEN @FechaInicio AND @FechaFin
      AND (@Estado IS NULL OR e.Estado = @Estado)
    ORDER BY e.FechaRegistro DESC;
END
GO
