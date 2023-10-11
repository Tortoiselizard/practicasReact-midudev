import { useEffect, useState } from 'react'
import usePersons from './hooks/usePersons'
import useUpdateSearch from './hooks/useUpdateSearch'
import './App.css'

function App () {
  const [input, updateInput] = useUpdateSearch()
  const [sort, setSort] = useState('')
  const { persons, getPersons } = usePersons({ input, sort })

  useEffect(() => {
    console.log('nuevo getPersons')
  }, [getPersons])

  function handleChange (event) {
    updateInput(event.target.value)
  }

  function handleClick () {
    getPersons(input)
  }

  function handleSort (event) {
    setSort(event.target.value)
  }

  return (
    <div>
      <div className='container-search'>
        <input onChange={handleChange} value={input} />
        <button onClick={handleClick}>Buscar</button>
      </div>
      <div className='value-search'>
        <label>Buscando por: {input}</label>
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type='radio'
          onChange={handleSort}
          name='typeSearch'
          value='nombre'
        />
      </div>
      <div>
        <label>Edad:</label>
        <input
          type='radio'
          onChange={handleSort}
          name='typeSearch'
          value='edad'
        />
      </div>
      <div>
        <label>Trabajo:</label>
        <input
          type='radio'
          onChange={handleSort}
          name='typeSearch'
          value='trabajo'
        />
      </div>
      <div className='container-response'>
        <label>Elementos encontrados:</label>
        <button onClick={() => { console.log(persons) }}>Mostrar</button>
        {
          persons.map(person => (
            <div key={person.ci}>
              <h1>Hola {person.name}!</h1>
              <h2>Edad: {person.age}</h2>
              <h3>Trabajo: {person.job}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
