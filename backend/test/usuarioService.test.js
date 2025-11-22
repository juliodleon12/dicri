const UsuarioService = require("../src/application/services/UsuarioService");

test("Login DTO debe validar email requerido", () => {
  expect(() => new LoginDTO({ password: "123" }))
    .toThrow("El email es obligatorio");
});
