const User = require('../models/user.model');
const getWeatherData = require('../routes/getWeatherData');

const createUser = async (req, res) => {
  try {
    const { email, location } = req.body;

    if (!email || !location) {
      return res.status(400).json({ message: 'Email and location are required' });
    }

    const weatherData = await getWeatherData(location);
    console.log('Fetched Weather Data:', weatherData);

    const user = new User({
      email,
      location,
      weatherData,
    });

    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log('Error creating user:', error);
    res.status(500).json({ message: 'Error while creating user', error: error.message });
  }
};

const getWeatherData1 = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).send(user.weatherData);
  } catch (error) {
    console.log('Error fetching weather data:', error);
    res.status(500).json({ message: 'Error while fetching weather data', error: error.message });
  }
};

const updateWeatherData = async (req, res) => {
  try {
    const { email, location } = req.body;
    const weatherData = await getWeatherData(location);

    console.log('Fetched Weather Data:', weatherData);

    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      { email, location, weatherData },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    console.log('Error updating weather data:', error);
    res.status(500).json({ message: 'Error while updating weather data', error: error.message });
  }
};

module.exports = { createUser, getWeatherData1, updateWeatherData };
