import { useNavigate } from "react-router-dom"
import Button from "~/components/button/Button"
import { tmdbAPI } from "~/config"

const MovieCart = ({ item }) => {
  const navigate = useNavigate()
  const { title, poster_path, vote_average, release_date, id } = item
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-cart bg-slate-800">
      <img src={tmdbAPI.imageOriginal(poster_path)} alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5" />
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>
      <div className="flex items-center justify-between mb-10 opacity-50">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
    </div>
  )
}

export default MovieCart