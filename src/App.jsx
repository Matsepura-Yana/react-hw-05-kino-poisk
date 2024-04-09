import css from './index.css'
import { forTrendFilms } from 'trendingFilmsApi'
import { forFilmSearch } from './allFilmsApi'
import React from 'react'
import Home from 'Home'
import Header from 'Header'
import Movies from 'Movies'
import AboutUs from 'AboutUs'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [trendingFilms, setTrendingFilms] = useState([])
    const [page, setPage] = useState(1)
    const [searchFilms, setSearchFilms] = useState([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getTrendingFilmsFunction()
    }, [])

    useEffect(() => {
        getSearchFilmFunction()
    }, [query])

    const submitFunction = async e => {
        e.preventDefault()

        setQuery(() => {
            return e.target.elements.searchbarInput.value
        })

        navigate('/movies')
    }
    console.log(query)
    const getTrendingFilmsFunction = async () => {
        const apiDatas = await forTrendFilms()
        setTrendingFilms(() => {
            return apiDatas.results
        })
        console.log(apiDatas.results)
        return apiDatas.results
    }

    const getSearchFilmFunction = async () => {
        const apiDatas = await forFilmSearch(query, page)
        setSearchFilms(() => {
            return apiDatas.results
        })
        return apiDatas.results
    }

    return (
        <>
            <button onClick={getTrendingFilmsFunction}>click</button>
            <Header submitFunction={submitFunction}></Header>
            <Routes>
                <Route path="/" element={<Home api={trendingFilms} />} />
                <Route path="/movies" element={<Movies api={searchFilms} />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </>
    )
}
export default App
