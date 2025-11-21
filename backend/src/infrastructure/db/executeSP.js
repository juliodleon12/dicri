const { getPool, sql } = require("./connection");

/**
 * Ejecuta un procedimiento almacenado con parámetros.
 *
 * @param {string} spName - Nombre del procedimiento almacenado
 * @param {object} params - Parámetros en formato clave:valor
 * @returns {Promise<any>} Recordset devuelto por el SP
 */
async function executeSP(spName, params = {}) {
  try {
    const pool = getPool();
    const request = pool.request();

    // Agregar parámetros dinámicamente
    for (const key in params) {
      request.input(key, params[key]);
    }

    const result = await request.execute(spName);
    return result.recordset ?? [];
  } catch (err) {
    console.error(`❌ Error ejecutando SP ${spName}:`, err.message);
    throw err;
  }
}

module.exports = {
  executeSP,
  sql,
};
