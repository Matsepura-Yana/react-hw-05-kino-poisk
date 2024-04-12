import React from 'react'
import MovieItem from 'MovieItem'

const Movies = ({ api, onClick }) => {
    const styleUl = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '10px 40px',
        margin: '0px',
    }
    return (
        <ul className="movieGallery" style={styleUl} onClick={onClick}>
            {api.map(elem => {
                return <MovieItem data={elem}></MovieItem>
            })}
        </ul>
    )
}

export default Movies
