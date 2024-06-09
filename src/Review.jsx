import React from 'react'

const Review = ({ userDatas }) => {
    const styledDiv = {
        display: 'grid',
        gridTemplateColumns: '70px 750px 100px',
        gap: '20px',
        position: 'relative',
        padding: '0 20px 10px',
    }

    return userDatas.map(el => (
        <div>
            <div style={styledDiv}>
                <img
                    src={
                        el.author_details.avatar_path === null
                            ? `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
                            : `https://image.tmdb.org/t/p/w500${el.author_details.avatar_path}`
                    }
                    alt="not found"
                    style={{
                        position: 'relative',
                        height: '70px',
                        borderRadius: '100px',
                        width: '70px',
                        margin: '7px 7px 3px 3px',
                    }}
                />
                <div id="info">
                    <h3 style={{ margin: '3px' }}>
                        {el.author_details.username}
                    </h3>
                    {Math.round((el.author_details.rating / 10) * 5) === 1 ? (
                        <p
                            style={{
                                color: 'gold',
                                fontSize: '20px',
                                margin: '-5px 0px ',
                            }}
                        >
                            ★☆☆☆☆
                        </p>
                    ) : Math.round((el.author_details.rating / 10) * 5) ===
                      2 ? (
                        <p
                            style={{
                                color: 'gold',
                                fontSize: '20px',
                                margin: '-5px 0px',
                            }}
                        >
                            ★★☆☆☆
                        </p>
                    ) : Math.round((el.author_details.rating / 10) * 5) ===
                      3 ? (
                        <p
                            style={{
                                color: 'gold',
                                fontSize: '20px',
                                margin: '2px 0px',
                            }}
                        >
                            ★★★☆☆
                        </p>
                    ) : Math.round((el.author_details.rating / 10) * 5) ===
                      4 ? (
                        <p
                            style={{
                                color: 'gold',
                                fontSize: '20px',
                                margin: '-5px 0px',
                            }}
                        >
                            ★★★★☆
                        </p>
                    ) : (
                        <p
                            style={{
                                color: 'gold',
                                fontSize: '20px',
                                margin: '-5px 0px',
                            }}
                        >
                            ★★★★★
                        </p>
                    )}
                    <p style={{ maxWidth: '700px' }}>{el.content}</p>
                </div>
                <h5 style={{ width: '100px' }}>
                    {el.created_at
                        .slice(0, 10)
                        .replace('-', '.')
                        .replace('-', '.')}
                </h5>
            </div>
        </div>
    ))
}

export default Review
