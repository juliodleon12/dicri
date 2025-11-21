CREATE PROCEDURE sp_Usuario_Login
    @Email NVARCHAR(150),
    @PasswordHash NVARCHAR(200)
AS
BEGIN
    SELECT Id, Nombre, Email, Rol
    FROM Users
    WHERE Email = @Email 
      AND PasswordHash = @PasswordHash
      AND Activo = 1;
END
GO