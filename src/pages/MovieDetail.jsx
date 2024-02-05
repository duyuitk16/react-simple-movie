import { useParams } from "react-router-dom"
import useSWR from "swr"
import { fetcher, tmdbAPI } from "~/config"
import { SwiperSlide, Swiper } from "swiper/react"
import MovieCart from "~/components/movie/MovieCart"

const MovieDetail = () => {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=
  const { movieId } = useParams()
  const { data } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher)

  // console.log('🚀 ~ MovieDetail ~ data:', data)
  if (!data) return null
  const { backdrop_path, poster_path, title, genres, overview } = data
  return (
    <>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
        <div className="w-full h-full bg-no-repeat bg-cover rounded-xl" style={{
          backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`
        }}>
        </div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 mb-10">
        <img src={tmdbAPI.imageOriginal(poster_path)} alt="" className="object-cover w-full h-full rounded-xl" />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center text-white">{title}</h1>
      <div className="flex items-center justify-center gap-5 mb-5">
        {genres.length > 0 && genres.map(item => (
          <span key={item.id}
            className="px-4 py-2 border rounded-md border-primary text-primary"
          >{item.name}</span>
        ))}
      </div>
      <p className="w-full max-w-[600px] mx-auto text-center leading-relaxed text-sm mb-20">
        {overview}
      </p>
      <Cast movieId={movieId}></Cast>
      <MovieVideo movieId={movieId}></MovieVideo>
      <MovieSimilar movieId={movieId}></MovieSimilar>
    </>
  )
}

function Cast({ movieId }) {
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher)
  // console.log('🚀 ~ Cast ~ data:', data)
  if (!data) return null
  const { cast } = data
  if (!cast || cast.length <= 0) return
  return (
    <>
      <h2 className="mb-10 text-3xl font-medium text-center">Casts</h2>
      <div className="flex items-center justify-center gap-5 mb-20">
        {cast.length > 0 && cast.slice(0, 5).map(item => (
          <div className="mb-auto cast-item" key={item.id}>
            <img
              className="w-full h-[350px] object-cover mb-3 rounded-md"
              src={tmdbAPI.imageOriginal(item.profile_path)} alt="" />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

function MovieVideo({ movieId }) {
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher)
  if (!data) return null
  // console.log('🚀 ~ MovieVideo ~ data:', data)
  const { results } = data
  if (!results || results <= 0) return
  return (
    <>
      <div className="flex flex-col gap-10 mb-20">
        {results.slice(0, 2).map(item => (
          <div key={item.id} >
            <h3 className="inline-block px-4 py-2 mb-5 text-xl font-medium rounded-md bg-secondary">{item.name}</h3>
            <div className="w-full aspect-video">
              <iframe className="w-full h-full " src={`https://www.youtube.com/embed/${item.key}`} title={item.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function MovieSimilar({ movieId }) {
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher)
  if (!data) return null
  const { results } = data
  if (!results || results <= 0) return
  // console.log('🚀 ~ MovieSimilar ~ results:', results)
  return (
    <>
      <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
      <div className="list-movies">
        <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={40}>
          {data && data.results?.length > 0 && data.results.map(item => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )


}


export default MovieDetail