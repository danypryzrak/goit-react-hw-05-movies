import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCasts} from 'Services/MoviesApi'

const Cast = () => {

const { id } = useParams()
const [casts, setCasts] = useState()

    useEffect(() => {
      getCasts(id)
      .then(setCasts)
      .catch(err => console.log(err))
    }, [id])

    console.log(casts)
  return (
      casts && <ul>
          {casts.map(cast => {
            return <li key={nanoid()}>
                {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="actor" width='120' height='180'/> : <p>Sorry, we dont have a foto</p>}
                  <h4>{cast.name}</h4>
                  <p>Character: {cast.character}</p>
            </li>
        })}
    </ul>
  )
}

export default Cast;
