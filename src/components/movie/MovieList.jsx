import { SwiperSlide, Swiper } from "swiper/react"
import MovieCart from "./MovieCart"
import useSWR from "swr"
import { fetcher, tmdbAPI } from "~/config"

//689b5231c55ce30f61d654cb4851693a
// https://api.themoviedb.org/3/movie/now_playing?api_key=689b5231c55ce30f61d654cb4851693a
// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/movie/top_rated


const MovieList = ({ type }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher)
  return (
    <div className="list-movies">
      <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={40}>
        {data && data.results?.length > 0 && data.results.map(item => (
          <SwiperSlide key={item.id}>
            <MovieCart item={item}></MovieCart>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList