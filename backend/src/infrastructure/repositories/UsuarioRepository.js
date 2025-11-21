const IUsuarioRepository = require("../../domain/repositories/IUsuarioRepository");
const { executeSP } = require("../db/executeSP");

class UsuarioRepository extends IUsuarioRepository {
  constructor() {
    super();
  }

  async login(email, passwordHash) {
    const result = await executeSP("sp_Usuario_Login", {
      Email: email,
      PasswordHash: passwordHash,
    });

    return result[0] || null;
  }

  async getAll() {
    return await executeSP("sp_Usuario_Get");
  }
}

module.exports = UsuarioRepository;
