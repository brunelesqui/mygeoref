const config = require('./utils/config')

const express = require('express')
const cors = require('cors')

const app = express()

const provincesRouter = require('./controllers/provinces')
const departmentRouter = require('./controllers/department')
const localitiesRouter = require('./controllers/localities')

app.use(express.json())
app.use(cors())
app.use(config.PATH_PROVINCES, provincesRouter)
app.use(config.PATH_DEPARTMENT, departmentRouter)
app.use(config.PATH_LOCALITIES, localitiesRouter)

app.get('/', (request, response) => {
	response.send('API mygeoref')
})

module.exports = app