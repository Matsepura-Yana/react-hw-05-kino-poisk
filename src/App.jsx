import './index.css'
import { forTrendFilms } from 'trendingFilmsApi'
import { forFilmSearch } from './allFilmsApi'
import React from 'react'
import Home from 'Home'
import Header from 'Header'
import Movies from 'Movies'
import AboutUs from 'AboutUs'
import MovieDetails from './MovieDetails'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [trendingFilms, setTrendingFilms] = useState([])
    const [page] = useState(1)
    const [searchFilms, setSearchFilms] = useState([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getTrendingFilmsFunction()
    }, [])

    const submitFunction = async e => {
        e.preventDefault()

        setQuery(() => {
            return e.target.elements.searchbarInput.value
        })

        navigate('/movies')
    }

    const getTrendingFilmsFunction = async () => {
        const apiDatas = await forTrendFilms()
        setTrendingFilms(() => {
            return apiDatas.results
        })
        return apiDatas.results
    }

    useEffect(() => {
        const getSearchFilmFunction = async () => {
            const apiDatas = await forFilmSearch(query, page)
            setSearchFilms(() => {
                return apiDatas.results
            })
            return apiDatas.results
        }
        getSearchFilmFunction()
    }, [query, page])

    const filmDetailsFunction = id => {
        navigate(`/${id}`)
    }

    return (
        <>
            <div style={{ marginTop: '20px' }}></div>
            <Header submitFunction={submitFunction}></Header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            api={trendingFilms}
                            onClick={filmDetailsFunction}
                        />
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <Movies
                            api={searchFilms}
                            onClick={filmDetailsFunction}
                        />
                    }
                />
                <Route path="/about" element={<AboutUs />} />
                <Route path={`/:id`} element={<MovieDetails />} />
            </Routes>
        </>
    )
}
export default App
