import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { getSearchFilms } from 'Services/MoviesApi'

export const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState()
    const getParams = searchParams.get('query')
    const location = useLocation()

  useEffect(() => {
        getParams && (
        getSearchFilms(getParams, 1)
        .then(setMovies)
        )
    }, [getParams])
  
  function handleSubmit(ev) {
    ev.preventDefault()
    const query = ev.currentTarget.searchInp.value
    setSearchParams({query})
  }

  return (
        <>
            <form onSubmit={handleSubmit}>
                <input name='searchInp' />
                <button type='submit'>Search</button>
            </form>

            {movies && (<>
                <ul>
                    {movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <Link to={`${movie.id}`} state={{back: `${location.pathname}${location.search}`}}>{movie.title}</Link>
                            </li>)
                    })}
            </ul>
            <Outlet/>
            </>
    )}</>
    )
}
