module.exports = {
  HOST: 'localhost',
  USER: 'adminuser',
  PASSWORD: 'adminuser',
  DB: "LX01",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}