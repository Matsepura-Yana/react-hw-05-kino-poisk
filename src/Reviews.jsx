import Review from 'Review'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { forFilmReviews } from 'reviewsApi'

const Reviews = () => {
    const [reviews, setReviewes] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getFilmReviews = async () => {
            const apiDatas = await forFilmReviews(id)
            setReviewes(() => {
                return apiDatas.results
            })
            return apiDatas.results
        }
        getFilmReviews()
    }, [id])

    return <Review userDatas={reviews}></Review>
}

export default Reviews
