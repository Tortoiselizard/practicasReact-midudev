import data from '../../data.json'

export function solititudFetch (input) {
  console.log('empezando solicitud...')
  return new Promise((resolve) => {
    setTimeout(() => {
      const findedPersons = data.search.filter(person => person.name.toLowerCase().includes(input))
      console.log('respuesta de soliciutd:', findedPersons)
      console.log('input:', input)
      resolve(findedPersons)
    }, 5000)
  })
}
