const User = require('../models/user.model');
const getWeatherData = require('../routes/getWeatherData');

 const createUser = async (req, res) => {

    try{
        const {email, location} = req.body;

        if (!email || !location) {
            return res.status(400).json({ message: 'Email and location are required' });
          }

        const weatherData=await getWeatherData(location);
        console.log('Fetched Weather Data:', weatherData);
        const user = new User({
            email, 
            location,
             weatherData,
            });

        await user.save();
        res.status(201).send(user);
    }catch(error){
        console.log('error fetching users: ', error);
        res.status(500).json({message: 'Error while creating user', error: error.message})
    }


}

 const getWeatherData1=async(req,res)=>{
    try{

        const {email}=req.params;

        const weather=await User.findOne({email});
        if(!weather){
            return res.status(404).json({message:'Weather data not found'});
        }
        res.status(200).send(weather.weatherData);

    }catch(error){
        console.log('error fetching weather data',error);
        res.status(500).json({message:'Error while fetching weather data',error:error.message});
    }
};
const updateWeatherData = async (req, res,next) => {


    try{
        const { email,location }=req.body;
        const weatherData=await getWeatherData(location);
        
        console.log('Fetched Weather Data:', weatherData);
        const updateWeatherData=await User.findOneAndUpdate(
            {email:req.params.email},
            {email,location,weatherData},
            {new: true}


        );
        res.status(200).send(updateWeatherData);

    }catch(error){
        console.log('error updating weather data',error);
        res.status(500).json({message:'Error while updating weather data',error:error.message});
    }
} 

module.exports = {createUser,getWeatherData1,updateWeatherData};