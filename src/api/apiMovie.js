import axios from 'axios';

export const apieMovie = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE0Y2UzOGE0ZmQ5NzZjYjk4YTA5OGU5ZTNkMTY3ZiIsInN1YiI6IjYwMmU2ZmRkZTg2MDE3MDAzYzAwNGQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlelnkwouHMOuAI7ENQZsEWUpLq3oE5vQ5qLfWXfkiY"

apieMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${token}` // ou  "Bearer" + token
    return request
})