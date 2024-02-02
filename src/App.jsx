import './App.scss'

function App() {

  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[600px] mb-20">
        <div className="w-full h-full rounded-lg relative">
          <img src="https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/27/730337/190425160639-02-Aven.jpg" alt=""
            className="w-full h-full object-cover rounded-lg" />
          <div className="overlay absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="banner-content absolute text-white left-5 bottom-5">
            <h2 className="text-3xl mb-5 font-semibold">Avengers: Endgame</h2>
            <div className="flex items-center justify-center gap-x-3 mb-8">
              <span className="px-4 py-2 rounded-lg border border-white">Avengers</span>
              <span className="px-4 py-2 rounded-lg border border-white">Avengers</span>
              <span className="px-4 py-2 rounded-lg border border-white">Avengers</span>
            </div>
            <button className="font-semibold px-6 py-3 bg-primary rounded-lg text-xl">Watch Now</button>
          </div>
        </div>
      </section>
      <section className="layout-movies text-white page-container mb-20">
        <h3 className="text-2xl font-bold mb-10">Now Playing</h3>
        <div className="list-movies grid grid-cols-4 gap-x-10">
          <div className="movie-cart bg-slate-800 rounded-lg p-3">
            <img src="https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/27/730337/190425160639-02-Aven.jpg" alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5" />
            <h3 className="text-xl font-semibold mb-5">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="px-6 py-3 font-semibold bg-primary rounded-lg w-full">Watch Now</button>
          </div>
        </div>
      </section>
      <section className="layout-movies text-white page-container mb-20">
        <h3 className="text-2xl font-bold mb-10">Top Rated</h3>
        <div className="list-movies grid grid-cols-4 gap-x-10">
          <div className="movie-cart bg-slate-800 rounded-lg p-3">
            <img src="https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/27/730337/190425160639-02-Aven.jpg" alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5" />
            <h3 className="text-xl font-semibold mb-5">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="px-6 py-3 font-semibold bg-primary rounded-lg w-full">Watch Now</button>
          </div>
        </div>
      </section>
      <section className="layout-movies text-white page-container mb-20">
        <h3 className="text-2xl font-bold mb-10">Trending</h3>
        <div className="list-movies grid grid-cols-4 gap-x-10">
          <div className="movie-cart bg-slate-800 rounded-lg p-3">
            <img src="https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/27/730337/190425160639-02-Aven.jpg" alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5" />
            <h3 className="text-xl font-semibold mb-5">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="px-6 py-3 font-semibold bg-primary rounded-lg w-full">Watch Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
