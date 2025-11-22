CREATE PROCEDURE sp_Usuario_Login
    @Email NVARCHAR(150)
AS
BEGIN
    SELECT Id, Nombre, Email, PasswordHash, Rol
    FROM Users
    WHERE Email = @Email 
      AND Activo = 1;
END
GO