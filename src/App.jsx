import './App.scss'
import MovieList from './components/movie/MovieList'

function App() {

  return (
    <>
      <header className="flex items-center justify-center mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[600px] mb-20">
        <div className="relative w-full h-full rounded-lg">
          <img src="https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/27/730337/190425160639-02-Aven.jpg" alt=""
            className="object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg overlay"></div>
          <div className="absolute text-white banner-content left-5 bottom-5">
            <h2 className="mb-5 text-3xl font-semibold">Avengers: Endgame</h2>
            <div className="flex items-center justify-center mb-8 gap-x-3">
              <span className="px-4 py-2 border border-white rounded-lg">Avengers</span>
              <span className="px-4 py-2 border border-white rounded-lg">Avengers</span>
              <span className="px-4 py-2 border border-white rounded-lg">Avengers</span>
            </div>
            <button className="px-6 py-3 text-xl font-semibold rounded-lg bg-primary">Watch Now</button>
          </div>
        </div>
      </section>
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
