const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UsuarioService {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async login(loginDTO) {
    const email = loginDTO.email;
    const password = loginDTO.password;

    // Hash temporal para SP (por simplicidad usamos hash directo)
    const passwordHash = bcrypt.hashSync(password, 8);

    const user = await this.usuarioRepository.login(email, passwordHash);

    if (!user) throw new Error("Credenciales inválidas");

    // Generar JWT
    const token = jwt.sign(
      {
        id: user.Id,
        email: user.Email,
        rol: user.Rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return {
      token,
      usuario: {
        id: user.Id,
        nombre: user.Nombre,
        email: user.Email,
        rol: user.Rol,
      },
    };
  }

  async getAll() {
    return await this.usuarioRepository.getAll();
  }
}

module.exports = UsuarioService;
