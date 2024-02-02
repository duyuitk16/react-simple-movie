
const MovieCart = ({ item }) => {
  const { title, poster_path, vote_average, release_date } = item
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-cart bg-slate-800">
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5" />
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>
      <div className="flex items-center justify-between mb-10 opacity-50">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button className="w-full px-6 py-3 mt-auto font-semibold rounded-lg bg-primary">Watch Now</button>
    </div>
  )
}

export default MovieCart