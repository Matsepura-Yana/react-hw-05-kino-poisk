import React from 'react'
import MovieItem from 'MovieItem'

const Home = ({ api }) => {
    const styleUl = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '10px 40px',
        margin: '0px',
    }
    return (
        <ul className="movieGallery" style={styleUl}>
            {api.map(elem => {
                return <MovieItem data={elem}></MovieItem>
            })}
        </ul>
    )
}

export default Home
