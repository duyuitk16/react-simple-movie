import './App.scss'
import Banner from './components/banner/Banner'
import MovieList from './components/movie/MovieList'
import "swiper/scss"


function App() {

  return (
    <>
      <header className="flex items-center justify-center mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="mb-20 text-white layout-movies page-container">
        <h3 className="mb-10 text-2xl font-bold">Now Playing</h3>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="mb-20 text-white layout-movies page-container">
        <h3 className="mb-10 text-2xl font-bold">Top Rated</h3>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="mb-20 text-white layout-movies page-container">
        <h3 className="mb-10 text-2xl font-bold">Trending</h3>
        <MovieList type="popular"></MovieList>

      </section>
    </>
  )
}

export default App
