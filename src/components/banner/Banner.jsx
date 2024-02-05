import { SwiperSlide, Swiper } from "swiper/react"
import useSWR from "swr"
import { fetcher, tmdbAPI } from "~/config"
import Button from "../button/Button"
import { useNavigate } from "react-router-dom"


const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher)
  return (
    <section className="banner page-container h-[600px] mb-20">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {data && data.results?.length > 0 && data.results.map(item => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function BannerItem({ item }) {
  const { title, poster_path, id } = item
  const navigate = useNavigate()
  return (
    <div className="relative w-full h-full rounded-lg">
      <img src={tmdbAPI.imageOriginal(poster_path)} alt=""
        className="object-cover w-full h-full rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg overlay"></div>
      <div className="absolute text-white banner-content left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-semibold">{title}</h2>
        <div className="flex items-center justify-center mb-8 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-lg">Avengers</span>
          <span className="px-4 py-2 border border-white rounded-lg">Avengers</span>
          <span className="px-4 py-2 border border-white rounded-lg">Avengers</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  )
}


export default Banner