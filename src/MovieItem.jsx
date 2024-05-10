import React from 'react'

const MovieItem = ({ data, onClick }) => {
    const styledParagraph = {
        margin: '3px 0px 20px 0px',
        fontSize: '20px',
        color: 'gold',
    }

    const objectId = data.id

    return (
        <div
            style={{
                border: '2px solid black',
                width: '266.9px',
                margin: '10px 0px 0px 0px',
            }}
            onClick={() => onClick(objectId)}
        >
            <img
                style={
                    data.backdrop_path
                        ? { height: '150px' }
                        : {
                              height: '150px',
                              marginLeft: '8px',
                              border: '1px light-grey solid',
                          }
                }
                src={
                    data.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
                        : `https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png`
                }
                alt="not found"
            />
            <h3 style={{ margin: '3px' }}>{data.original_title}</h3>
            {Math.round((data.vote_average / 10) * 5) === 1 ? (
                <p style={styledParagraph}>★☆☆☆☆</p>
            ) : Math.round((data.vote_average / 10) * 5) === 2 ? (
                <p style={styledParagraph}>★★☆☆☆</p>
            ) : Math.round((data.vote_average / 10) * 5) === 3 ? (
                <p style={styledParagraph}>★★★☆☆</p>
            ) : Math.round((data.vote_average / 10) * 5) === 4 ? (
                <p style={styledParagraph}>★★★★☆</p>
            ) : (
                <p style={styledParagraph}>★★★★★</p>
            )}
        </div>
    )
}

export default MovieItem
