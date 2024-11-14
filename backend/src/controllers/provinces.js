const provincesRouter = require('express').Router()
const provinces = require('../../json/provincias.json')

provincesRouter.get('/', (request, response) => {
	//console.log('***', provinces.provincias.length)
	provinces.cantidad = provinces.provincias.length
	response.send(provinces)
})

provincesRouter.get('/:query', (request, response) => {
	// parse: texto -> objeto
	// stringify: objeto -> texto
    // /cor.*/.test()
    
	let filterResult = {}

	// Validar si el parametro es numérico para buscar por id, caso contrario por nombre
	const id = Number(request.params.query)
    if (!Number.isNaN(id)) {
    	filterResult = provinces.provincias.filter(prov => Number(prov.id) == Number(id))
    }
    else {
    	const patron = new RegExp(`${request.params.query}.*`, "i")
		filterResult = provinces.provincias.filter(prov => patron.test(prov.nombre))	
    }
		
    const result = { provincias: filterResult }
	result.cantidad = result.provincias.length
	//console.log('***', result)

	response.send(result)
})

module.exports = provincesRouter