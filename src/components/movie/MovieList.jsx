import { SwiperSlide, Swiper } from "swiper/react"
import "swiper/scss"
import MovieCart from "./MovieCart"
import useSWR from "swr"
import { fetcher } from "../../config"
import { useEffect, useState } from "react"

//689b5231c55ce30f61d654cb4851693a
// https://api.themoviedb.org/3/movie/now_playing?api_key=689b5231c55ce30f61d654cb4851693a
// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/movie/top_rated


const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([])
  const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=689b5231c55ce30f61d654cb4851693a`, fetcher)
  useEffect(() => {
    if (data && data.results)
      setMovies(data?.results)
  }, [data])

  // console.log('🚀 ~ MovieList ~ movies:', movies)
  return (
    <div className="list-movies">
      <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={40}>
        {movies.length > 0 && movies.map(item => (
          <SwiperSlide key={item.id}>
            <MovieCart item={item}></MovieCart>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList