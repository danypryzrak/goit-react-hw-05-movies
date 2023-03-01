import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReviews } from 'Services/MoviesApi'

const Reviews = () => {

    const {id} = useParams()
    const [reviews, setReviews] = useState()
    
    useEffect(() => {
        getReviews(id)
        .then(setReviews)
        .catch(err => console.log(err))
    }, [id])
    console.log(reviews)
    return reviews ? (<ul>
        {reviews.map(review => {
            return (
                <li key={nanoid()}>
                    <h4>{review.author}</h4>
                    <p>{review.content}</p>
                </li>
            )
        })}
    </ul>) : (<p>Sorry, we dont have reviews for this film</p>)

}

export default Reviews