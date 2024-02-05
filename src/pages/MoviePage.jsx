import useSWR from "swr"
import { apiKey, fetcher } from "../config"
import MovieCart from "../components/movie/MovieCart"
import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import ReactPaginate from 'react-paginate';

const itemsPerPage = 20


const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [nextPage, setNextPage] = useState(1)
  const [query, setQuery] = useState("")
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`)
  const debounceValue = useDebounce(query)

  const handleInputChange = (e) => { setQuery(e.target.value) }

  const { data, isLoading } = useSWR(url, fetcher)

  useEffect(() => {
    if (debounceValue)
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debounceValue}&page=${nextPage}`)
    else
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`)
  }, [debounceValue, nextPage])

  useEffect(() => {
    if (!data || !data.total_results) return
    setPageCount(Math.ceil(data.total_results / itemsPerPage))
  }, [data])

  const handlePageClick = (e) => {
    setNextPage(e.selected + 1)
  };

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
        isLoading && <div className="w-10 h-10 mx-auto border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      }
      <div className="grid grid-cols-4 gap-10 mb-10 text-white">
        {!isLoading && data && data.results?.length > 0 && data.results.map(item => (
          <MovieCart key={item.id} item={item}></MovieCart>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  )
}

export default MoviePage