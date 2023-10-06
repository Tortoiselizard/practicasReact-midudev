const API_KEY = 'live_e5FmRjH8Akz5Eh8w9i5WoQuzta82eVT8bkR16pIMEVs58QHQOd66ALQ6l1ILZtwn'

export function getFact () {
  console.log('buscando echo...')
  return fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => data.fact.split(' ')[0])
}

export function getImageCat (echo) {
  console.log('buscando imagen')
  return fetch(`https://api.thecatapi.com/v1/images/search?limit=50&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      for (const cat of data) {
        if (cat.categories && cat.categories[0].name.includes(echo[0].toLowerCase())) {
          return cat.url
        }
      }
      console.log('no encontré nada')
      return 'no encontré nada'
    })
}
