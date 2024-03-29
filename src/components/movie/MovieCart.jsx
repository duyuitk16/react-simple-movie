import { useNavigate } from "react-router-dom"
import Button from "~/components/button/Button"
import { tmdbAPI } from "~/config"
import PropTypes from 'prop-types'
import { withErrorBoundary } from 'react-error-boundary'
import LoadingSkeleton from "~/components/loading/LoadingSkeleton"


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

MovieCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    id: PropTypes.number
  })
}

function fallbackError() {
  return <p className="text-red-400 bg-red-100">Some thing went wrong with this component</p>
}

export default withErrorBoundary(MovieCart, {
  fallback: fallbackError,
})


export const MovieCartSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-cart bg-slate-800">
      <LoadingSkeleton height="250px" width="100%" radius="8px" className="mb-5"></LoadingSkeleton>
      <LoadingSkeleton height="20px" width="100%" radius="8px" className="mb-5"></LoadingSkeleton>
      <div className="flex items-center justify-between mb-10 opacity-50">
        <span>
          <LoadingSkeleton height="10px" width="50px" radius="8px"></LoadingSkeleton>
        </span>
        <span>
          <LoadingSkeleton height="10px" width="20px" radius="8px"></LoadingSkeleton>
        </span>
      </div>
      <LoadingSkeleton height="40px" width="100%" radius="8px" className="mt-auto"></LoadingSkeleton>
    </div>
  )
} 