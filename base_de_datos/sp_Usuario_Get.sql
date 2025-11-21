CREATE PROCEDURE sp_Usuario_Get
AS
BEGIN
    SELECT Id, Nombre, Email, Rol, Activo
    FROM Users;
END
GO