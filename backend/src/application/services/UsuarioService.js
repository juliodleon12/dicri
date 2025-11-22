const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UsuarioService {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async login(loginDTO) {
    const email = loginDTO.email;
    const password = loginDTO.password;

    const user = await this.usuarioRepository.login(email);

    if (!user) throw new Error("Credenciales inválidas");

    const valid = bcrypt.compareSync(password, user.PasswordHash);
    if (!valid) throw new Error("Credenciales inválidas");    

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

  async createUser({ nombre, email, password, rol = "Tecnico" }) {
    if (!nombre || !email || !password) throw new Error("Nombre, email y contraseña requeridos");
    const passwordHash = bcrypt.hashSync(password, 10);
    const created = await this.usuarioRepository.create({
      nombre,
      email,
      passwordHash,
      rol
    });
    return created;
  }  
}

module.exports = UsuarioService;
