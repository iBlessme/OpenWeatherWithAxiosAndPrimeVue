import axios from 'axios'

export const HTTP = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?q=",
    headers: {
        Authorization: 'Bearer {token}'
    }
})