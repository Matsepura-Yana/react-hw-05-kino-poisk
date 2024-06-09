import { forCast } from 'castApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Cast = () => {
    const [cast, setCast] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getFilmCast = async () => {
            const apiDatas = await forCast(id)
            setCast(() => {
                return apiDatas.cast
            })
            return apiDatas.cast
        }
        getFilmCast()
    }, [id])

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: '10px 40px',
                margin: '0px',
            }}
        >
            {cast.map(el => {
                return (
                    <div style={{ border: '1px solid black', width: '200px' }}>
                        <img
                            src={
                                el.profile_path
                                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                                    : `https://www.skf-mtusi.ru/images/prep/no-avatar.jpg`
                            }
                            alt="no img"
                            style={{ height: '300px', width: '200px' }}
                        />
                        <h3>{el.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Cast
