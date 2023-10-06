import { useState, useEffect } from 'react'
import { getFact } from '../services/solicitudes'

function useFact () {
  const [echo, setEcho] = useState('')
  useEffect(() => {
    getFact().then(fact => {
      setEcho(fact)
      console.log('echo encontrado y actualizando.')
    })
  }, [])
  return echo
}

export default useFact
