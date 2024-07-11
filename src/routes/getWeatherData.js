const axios=require('axios');


const getWeatherData = async (location) => {

    const apiKey=process.env.OPENWEATHERMAP_API_KEY;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try{
        const response=await axios.get(url);
        const weatherData={
            weather:response.data.weather,
            main:response.data.main,
            wind:response.data.wind,
        }
        return weatherData;


    }catch(error){
        console.log('error fetching weather data: ', error);
        throw error;
    }



}
module.exports = getWeatherData;