import { useEffect, useState } from 'react'

import TerritorialUnit from './components/TerritorialUnit'

import serviceTerritorialUnit from './services/TerritorialUnit'

function App() {
  const [provList, setProvList] = useState([])
  const [dptoList, setDptoList] = useState([])
  const [locList, setLocList] = useState([])

  const [provId, setProvId] = useState(0)

  const provSel = (provId) => {
    setProvId(0)

    if (provId > 0) {
      serviceTerritorialUnit.getAllDepartment(provId)
      .then(response => setDptoList(response.departamentos))

      setDptoList([])
      setLocList([])
      setProvId(provId)
    }
  }

  const dptoSel = (dptoId) => {
    if (dptoId > 0) {
      serviceTerritorialUnit.getAllLocalities(provId, dptoId)
      .then(response => setLocList(response.localidades))

      setLocList([])      
    }
  }

  const locSel = (locId) => {
    if (locId > 0)
      alert(locId)
  }

  const loadProv = () => {
    serviceTerritorialUnit.getAllProvinces()
    .then(response => setProvList(response.provincias))
  }

  useEffect(() => {
    loadProv()
  }, [])

  return (
    <>
      <div>
      <TerritorialUnit 
        name='Provincia'
        data={provList}
        handle={provSel}
      />
      </div>
      <div>
      <TerritorialUnit 
        name='Departamento'
        data={dptoList}
        handle={dptoSel}
      />
      </div>
      <div>
      <TerritorialUnit 
        name='Localidad'
        data={locList}
        handle={locSel}
      />
      </div>
    </>
  )
}

export default App
