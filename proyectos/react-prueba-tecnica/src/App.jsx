import useFact from './hooks/useFact'
import useCatImage from './hooks/useCatImage'
import { getFact, getImageCat } from './services/solicitudes'
import './App.css'

function App () {
  const echo = useFact()
  const [pathImage, updatePathImage] = useCatImage(echo)

  function handleClick () {
    getFact()
      .then(fact => getImageCat(fact))
      .then(url => updatePathImage(url))
  }

  return (
    <div className='app-container'>
      <header className='app-container-header'>
        <h1>Renderizado de echos</h1>
      </header>
      <main className='app-container-main'>
        <h2>Echo</h2>
        <p>{echo}</p>
        <button onClick={handleClick}>Otro gato</button>
        {
            pathImage === 'no encontré nada' || !pathImage
              ? <p>{pathImage}</p>
              : <img src={pathImage} alt='randomCat-firstFact' />
        }
      </main>
    </div>
  )
}

export default App
