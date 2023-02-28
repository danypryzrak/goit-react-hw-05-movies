import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { dataLoad } from 'Services/MoviesApi'

export const HomePage = () => {

    const [movies, setMovies] = useState()
    const [page] = useState(1)
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        dataLoad(page)
        .then(setMovies)
        .catch(err => console.log(err))
    }, [page])
    

    return (<>
    <h1>Trending today</h1>
    
        {movies && (
            <ul>
                {movies.map(movie => {
                    return (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`} state={{back : '/'}}>{movie.title ? movie.title : movie.name}</Link>
                    </li>
                    )
                })}
            </ul>
    )}    

    </>
    
  )
}
