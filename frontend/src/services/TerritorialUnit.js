import axios from 'axios'
require('dotenv').config()

const baseUrl = process.env.BASE_URL
//'http://localhost:3001/api/'

const getAllProvinces = () => {
  const request = axios.get(baseUrl + 'provincias') 
  return request.then(response => response.data) 
}

const getAllDepartment = (provinceId) => {
  const request = axios.get(baseUrl + 'departamentos/' + provinceId) 
  return request.then(response => response.data) 
}

const getAllLocalities = (provinceId, dptoId) => {
  const request = axios.get(`${baseUrl}localidades/${provinceId}/${dptoId}`) 
  return request.then(response => response.data) 
}


// Definición compacta:
export default { getAllProvinces, getAllDepartment, getAllLocalities }