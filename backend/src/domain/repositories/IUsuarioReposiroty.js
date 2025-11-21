class IUsuarioRepository {
  login(email, passwordHash) {
    throw new Error("Not implemented");
  }

  getAll() {
    throw new Error("Not implemented");
  }
}

module.exports = IUsuarioRepository;
