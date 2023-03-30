import axios from 'axios';
const API_KEY = "37d3c781b1e158ca3de80be8f987fde7";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=matric`)
        return response.data;
    } catch (error) {
        console.log('Error while calling weather api', error.message);
        return error.message;
    }
}