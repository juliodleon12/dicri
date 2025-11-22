const IUsuarioRepository = require("../../domain/repositories/IUsuarioReposiroty");
const { executeSP } = require("../db/executeSP");

class UsuarioRepository extends IUsuarioRepository {
  constructor() {
    super();
  }

  async login(email) {
    const result = await executeSP("sp_Usuario_Login", {
      Email: email
    });

    return result[0] || null;
  }

  async getAll() {
    return await executeSP("sp_Usuario_Get");
  }

  async create({ nombre, email, passwordHash, rol }) {
    const result = await executeSP("sp_Usuario_Insert", {
      Nombre: nombre,
      Email: email,
      PasswordHash: passwordHash,
      Rol: rol
    });
    return result[0] || null;
  }

}

module.exports = UsuarioRepository;
