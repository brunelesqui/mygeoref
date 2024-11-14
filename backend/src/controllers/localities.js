const localitiesRouter = require('express').Router()
const provinces = require('../../json/provincias.json')

localitiesRouter.get('/:provinceId', (request, response) => {
	//console.log('***', provinces.provincias.length)
	
	//let departments
	
	//provinces.cantidad = provinces.provincias.length
	
	response.send(getLocalities(request.params.provinceId))
})

function getLocalities(provinceId) {
	const result = {}
	result.localidades = []
	result.cantidad = 0

	const id = Number(provinceId)
	if (!Number.isNaN(id)) {
		const provFinded = 
			provinces.provincias.find(prov => Number(prov.id) === id)

		if (provFinded !== undefined) {
			const localities = 
				require(`../../json/localidades_${provFinded.filename}.json`)

			result.localidades = localities.localidades
			result.cantidad = localities.localidades.length
		}
		
		//console.log('***', id, provFinded.filename, department)
	} 
	return result
}


localitiesRouter.get('/:provinceId/:dptmentId', (request, response) => {

	// parse: texto -> objeto
	// stringify: objeto -> texto
    // /cor.*/.test()

	//console.log('***', request.params)

	const result = {}
	result.cantidad = 0

	const localities = getLocalities(request.params.provinceId)

	if (localities.cantidad > 0) {
		const findResult = 
			localities.localidades.filter(
				localite => getLocalite(localite, request.params.dptmentId)
			)
//localite => Number(localite.departamento.id) === Number(request.params.dptmentId) && localite.categoria === 'Entidad'
		if(findResult !== undefined) {
			result.localidades = findResult
			result.cantidad = findResult.length	
		}
		
	}

	response.send(result)
})

//&& /entidad/.test(localite.categoria.toLowerCase())

function getLocalite(localite, dptoId){
	if (localite.departamento.id === dptoId)
		return true
	else
		return false
}

module.exports = localitiesRouter