import useSWR from "swr"
import { fetcher } from "../config"
import MovieCart from "../components/movie/MovieCart"

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=689b5231c55ce30f61d654cb4851693a`, fetcher)
  return (
    <div className="page-container">
      <div className="flex mb-10 text-white">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Typing to search movies ..."
            className="w-full p-3 rounded-l-lg outline-none bg-slate-800" />
        </div>
        <button className="px-4 rounded-r-lg bg-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 text-white">
        {data && data.results?.length > 0 && data.results.map(item => (
          <MovieCart key={item.id} item={item}></MovieCart>
        ))}
      </div>
    </div>
  )
}

export default MoviePage