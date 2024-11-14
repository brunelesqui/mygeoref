const TerritorialUnit = ({name, data, handle}) => {
	const list = data.map((opt, i) => <option key={i} value={opt.id}>{opt.nombre}</option>)

	const change = (event) => {
		handle(event.target.value)
	}

	return (
		<>
			<label>{name}:</label>
			<select onChange={change}>
				<option value="">-- Seleccione una opcion --</option>
		    	{list}
			</select>
		</>
	)
}

export default TerritorialUnit