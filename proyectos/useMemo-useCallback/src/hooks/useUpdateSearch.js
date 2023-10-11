import { useState } from 'react'

function useUpdateSearch () {
  const [input, setInput] = useState('')
  function updateInput (value) {
    setInput(value)
  }
  return [input, updateInput]
}

export default useUpdateSearch
