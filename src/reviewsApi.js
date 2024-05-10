export async function forFilmReviews(id) {
    const filmReviewsBackend = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews`,
        {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzVlNWQwNTIyOGNiODUyODI4NWE2Mzk3OTcxNjY2MSIsInN1YiI6IjY1ZWRhOGRlNDQ3ZjljMDE4NzYwZWExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8i9Nx4vQHQk1S1fF5BL9O9kPPn-9iaSUln_Ppk5oZMo',
            },
        }
    )
    const filmReviewsBackendNew = await filmReviewsBackend.json()
    return filmReviewsBackendNew
}
