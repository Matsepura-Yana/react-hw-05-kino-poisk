import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { forFilmSearchById } from './searchMovieByIdApi'
import { useNavigate } from 'react-router-dom'

const MovieDetails = () => {
    const { id } = useParams()
    const [detailsById, setDetailsById] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const getDetailsByIdFunction = async () => {
            const apiDatas = await forFilmSearchById(id)
            setDetailsById(() => {
                return apiDatas
            })
            return apiDatas
        }

        getDetailsByIdFunction()
    }, [id])

    const genres = []

    const allGenresFunction = () => {
        detailsById.genres.map(e => genres.push(e.name))
        return genres.join(', ')
    }

    const reviewsFunction = () => {
        navigate('reviews')
    }
    const castFunction = () => {
        navigate('cast')
    }
    const handleOnClick = () => {
        navigate(-1)
    }

    const styledInfo = {
        display: 'grid',
        gridTemplateColumns: '200px auto',
        gap: '20px',
        position: 'relative',
        padding: '0 20px 10px',
        fontSize: '18px',
        lineHeight: '10px',
    }

    return detailsById ? (
        <>
            <div>
                <button onClick={handleOnClick}>Go back</button>
                <div style={styledInfo}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${detailsById.backdrop_path}`}
                        alt="error"
                        style={{
                            height: '300px',
                            width: '200px',
                            objectFit: 'cover',
                        }}
                    />
                    <div id="info">
                        <h2 style={{ marginBottom: '37px' }}>
                            {detailsById.original_title}
                        </h2>
                        <p>
                            Release date:
                            {detailsById.release_date.slice(0, 4)}
                        </p>
                        <p>Country: {detailsById.origin_country.join(', ')}</p>
                        <p>Genres: {allGenresFunction()}</p>
                        <p>Runtime: {detailsById.runtime} min</p>
                        <p>Status: {detailsById.status}</p>
                        {Math.round((detailsById.vote_average / 10) * 5) ===
                        1 ? (
                            <p>
                                Vote avarage:{' '}
                                <span style={{ color: 'gold' }}>★☆☆☆☆</span>
                            </p>
                        ) : Math.round((detailsById.vote_average / 10) * 5) ===
                          2 ? (
                            <p>
                                Vote avarage:{' '}
                                <span style={{ color: 'gold' }}>★★☆☆☆</span>
                            </p>
                        ) : Math.round((detailsById.vote_average / 10) * 5) ===
                          3 ? (
                            <p>
                                Vote avarage:{' '}
                                <span style={{ color: 'gold' }}>★★★☆☆</span>
                            </p>
                        ) : Math.round((detailsById.vote_average / 10) * 5) ===
                          4 ? (
                            <p>
                                Vote avarage:{' '}
                                <span style={{ color: 'gold' }}>★★★★☆</span>
                            </p>
                        ) : (
                            <p>
                                Vote avarage:{' '}
                                <span style={{ color: 'gold' }}>★★★★★</span>
                            </p>
                        )}
                        <p style={{ lineHeight: '25px', width: '700px' }}>
                            {detailsById.overview}
                        </p>
                    </div>
                </div>
                <button onClick={reviewsFunction}>Reviews</button>
                <button onClick={castFunction}>Cast</button>
            </div>
            <Outlet />
        </>
    ) : (
        <h1>Not found</h1>
    )
}

export default MovieDetails
