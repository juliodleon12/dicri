CREATE PROCEDURE sp_Usuario_Insert
    @Nombre NVARCHAR(100),
    @Email NVARCHAR(150),
    @PasswordHash NVARCHAR(200),
    @Rol NVARCHAR(50)
AS
BEGIN
    INSERT INTO Users (Nombre, Email, PasswordHash, Rol, Activo)
    VALUES (@Nombre, @Email, @PasswordHash, @Rol, 1);

    SELECT SCOPE_IDENTITY() AS Id;
END
GO
