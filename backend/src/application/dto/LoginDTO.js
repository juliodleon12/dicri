class LoginDTO {
  constructor({ email, password }) {
    if (!email) throw new Error("El email es obligatorio");
    if (!password) throw new Error("La contraseña es obligatoria");

    this.email = email;
    this.password = password;
  }
}

module.exports = LoginDTO;
