import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getDetails } from 'Services/MoviesApi'

const MovieDetails = () => {

    const { id } = useParams()
  const [movie, setMovie] = useState()
  const location = useLocation()
  const navigate = useNavigate()

    useEffect(() => {
      getDetails(id)
        .then(setMovie)
      .catch(err => console.log(err))
    }, [id])
    
  return (
    movie && <>
    <button onClick={() => navigate(location.state.back)} type='button'>Back</button>
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width='200' height='320' />
      <ul>
        <li>
            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
        </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
        </li>
          <li>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join('  ')}</p>
        </li>
      </ul>
    </div>
      
    <div>
        <ul>
          <li>
            <Link to={`cast`} state={{back: `${location.state.back}`}}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`} state={{back: `${location.state.back}`}}>Reviews</Link>
          </li>
      </ul>
      </div>
      <Outlet/>
  </>
  )
}

export default MovieDetails