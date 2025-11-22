const sql = require("mssql");
require("dotenv").config();

let pool = null;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

async function connectDB() {
  try {
    if (!pool) {
      console.log("Conectando a SQL Server...");
      pool = await sql.connect(config);
      console.log("Conectado a SQL Server.");
    }
    return pool;
  } catch (err) {
    console.error("❌ Error conectando a SQL Server:", err.message);
    throw err;
  }
}

function getPool() {
  if (!pool) {
    throw new Error("❌ La conexión a SQL Server no está inicializada.");
  }
  return pool;
}

module.exports = {
  connectDB,
  getPool,
  sql,
};
