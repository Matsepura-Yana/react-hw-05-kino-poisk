export async function forFilmSearch(query, page) {
    const searchFilmBackend = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
        {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzVlNWQwNTIyOGNiODUyODI4NWE2Mzk3OTcxNjY2MSIsInN1YiI6IjY1ZWRhOGRlNDQ3ZjljMDE4NzYwZWExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8i9Nx4vQHQk1S1fF5BL9O9kPPn-9iaSUln_Ppk5oZMo',
            },
        }
    )
    const searchFilmBackendNew = await searchFilmBackend.json()
    return searchFilmBackendNew
}
