const axios=require('axios');


const getWeatherData = async (location) => {

    const apiKey=process.env.wheather_api_key;
    const url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

    try{
        const response=await axios.get(url);
        return response.data;


    }catch(error){
        console.log('error fetching weather data: ', error);
        return error;
    }



}