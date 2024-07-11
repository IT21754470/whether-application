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
module.exports = {createUser};