CREATE PROCEDURE sp_Expediente_Get
AS
BEGIN
    SELECT e.Id, e.Codigo, e.FechaRegistro, e.TecnicoId, e.Estado, u.Nombre AS Tecnico
    FROM Expediente e
    INNER JOIN Users u ON e.TecnicoId = u.Id
    ORDER BY e.Id DESC;
END
GO
