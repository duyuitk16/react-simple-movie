import MovieList from "../components/movie/MovieList"

const HomePage = () => {
  return (
    <>
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

export default HomePage