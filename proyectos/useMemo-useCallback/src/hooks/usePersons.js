import { useCallback, useMemo, useRef, useState } from 'react'
// import { useEffect, useState } from "react"
// import { useEffect, useState, useMemo } from "react"
import { searchPersons } from '../services/persons'

function usePersons ({ input, sort }) {
  const [search, setSearch] = useState([])
  const lastInput = useRef('')

  // función getPerson modo async-await
  // async function getPersons() {
  //     const persons = await searchPersons({input})
  //     setSearch(persons)
  // }

  // función getPerson modo promesa
  //   function getPersons () {
  //     if (lastInput.current === input) return
  //     searchPersons({ input }).then(persons => setSearch(persons))
  //     lastInput.current = input
  //   }

  const getPersons = useCallback((input) => {
    if (lastInput.current === input) return
    searchPersons({ input }).then(persons => setSearch(persons))
    lastInput.current = input
  }, [])

  //   const getPersons = useMemo(() => {
  //     return () => {
  //       if (lastInput.current === input) return
  //       searchPersons({ input }).then(persons => setSearch(persons))
  //       lastInput.current = input
  //     }
  //   })

  // useEffect(() => {
  //     if (input === '') {
  //         console.log('entre en el if')
  //         return setSearch([])}
  //     solititudFetch(input)
  //         .then(data => setSearch(data))
  // }, [input])

  // const getName = useMemo(() => {
  //     return state
  // }, [input])

  // const sortedPerson = sort === 'nombre'
  // ? [...search].sort((a, b) => a.name.localeCompare(b.name))
  // : search

  const sortedPerson = useMemo(() => {
    return sort === 'nombre'
      ? [...search].sort((a, b) => a.name.localeCompare(b.name))
      : search
  }, [sort, search])

  return { persons: sortedPerson, getPersons }
}

export default usePersons
