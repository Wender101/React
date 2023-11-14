import '../src/Assets/Sass/App.css'
import Nav from './Assets/Components/Nav/NavBar'
import AboutFilm from './Assets/Components/AboutFilm/About'
import LocalFilms from './Assets/Components/Films/LocalFilms'

function App() {
  return (
    <div className="App">
      <Nav />
      <section className='localBackground'>
        <div className='background'></div>
      </section>
      <AboutFilm />
      <LocalFilms />
    </div>
  )
}

export default App
