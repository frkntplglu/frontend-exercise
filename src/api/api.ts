import axios from "axios"

export const movieAPI = axios.create({
    baseURL: "http://localhost:3000/entries"
})