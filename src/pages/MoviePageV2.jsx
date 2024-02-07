import useSWR from "swr"
import { fetcher, tmdbAPI } from "~/config"
import MovieCart, { MovieCartSkeleton } from "~/components/movie/MovieCart"
import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import ReactPaginate from 'react-paginate'
import { v4 } from 'uuid'
import Button from "~/components/button/Button"
import useSWRInfinite from "swr/infinite"


const itemsPerPage = 20


const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1)
  const [query, setQuery] = useState("")
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage))
  const debounceValue = useDebounce(query)

  const handleInputChange = (e) => { setQuery(e.target.value) }

  const {
    data,
    size,
    setSize,
    isLoading
  } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : []
  console.log('🚀 ~ MoviePage ~ movies:', movies)


  useEffect(() => {
    if (debounceValue)
      setUrl(tmdbAPI.getMovieSearch(debounceValue, nextPage))
    else
      setUrl(tmdbAPI.getMovieList("popular", nextPage))
  }, [debounceValue, nextPage])

  useEffect(() => {
    if (!data || !data.total_results) return
    setPageCount(Math.ceil(data.total_results / itemsPerPage))
  }, [data])

  return (
    <div className="page-container">
      <div className="flex mb-10 text-white">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Typing to search movies ..."
            className="w-full p-3 rounded-l-lg outline-none bg-slate-800"
            onChange={handleInputChange}
          />
        </div>
        <button className="px-4 rounded-r-lg bg-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
      </div>
      {
        isLoading &&
        <div className="grid grid-cols-4 gap-10 mb-10 text-white">
          {new Array(itemsPerPage).fill(0).map(item => (
            <MovieCartSkeleton key={v4()}></MovieCartSkeleton>
          ))}
        </div>
      }
      <div className="grid grid-cols-4 gap-10 mb-10 text-white">
        {!isLoading && movies.length > 0 && movies.map(item => (
          <MovieCart key={item.id} item={item}></MovieCart>
        ))}
      </div>
      <div className="text-center"><Button disabled={isReachingEnd} className={isReachingEnd ? "bg-slate-300" : ""} onClick={() => isReachingEnd ? null : setSize(size + 1)}>Load more</Button></div>
    </div >
  )
}

export default MoviePage