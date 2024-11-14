require('dotenv').config()

const PATH_PROVINCES = '/api/provincias'
const PATH_DEPARTMENT = '/api/departamentos'
const PATH_LOCALITIES = '/api/localidades'

const PORT = process.env.PORT
const SERVERNAME = process.env.SERVERNAME

module.exports = {
  PATH_PROVINCES,
  PATH_DEPARTMENT,
  PATH_LOCALITIES,
  PORT,
  SERVERNAME
}