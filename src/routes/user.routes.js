

const express = require('express');  // Import express
const { createUser,getWeatherData1,updateWeatherData } = require('../controllers/user.controller');

const router=express.Router();


router.post('/users',createUser);
router.get('/users/weather/:email',getWeatherData1);
router.put('/users/weather/:email',updateWeatherData);

module.exports = router; 