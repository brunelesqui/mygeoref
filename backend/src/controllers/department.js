const dptmentRouter = require('express').Router()
const provinces = require('../../json/provincias.json')

dptmentRouter.get('/:provinceId', (request, response) => {
	//console.log('***', provinces.provincias.length)
	
	//let departments
	
	//provinces.cantidad = provinces.provincias.length
	
	response.send(getDptments(request.params.provinceId))
})

function getDptments(provinceId) {
	const result = {}
	result.departamentos = []
	result.cantidad = 0

	const id = Number(provinceId)
	if (!Number.isNaN(id)) {
		const provFinded = 
			provinces.provincias.find(prov => Number(prov.id) === id)

		if (provFinded !== undefined) {
			const departments = 
				require(`../../json/departamentos_${provFinded.filename}.json`)

			result.departamentos = departments.departamentos
			result.cantidad = departments.departamentos.length
		}
		
		//console.log('***', id, provFinded.filename, department)
	} 
	return result
}

dptmentRouter.get('/:provinceId/:dptmentId', (request, response) => {
	// parse: texto -> objeto
	// stringify: objeto -> texto
    // /cor.*/.test()

	console.log('***', request.params)

	const result = {}
	result.cantidad = 0

	const departments = getDptments(request.params.provinceId)

	if (departments.cantidad > 0) {
		const findResult = 
			departments.departamentos.find(
				dpto => Number(dpto.id) === Number(request.params.dptmentId)
			)
		if(findResult !== undefined) {
			result.departamentos = findResult
			result.cantidad = 1	
		}
		
	}

	response.send(result)
})

module.exports = dptmentRouter