# Weather Notification API
# Overview
The Weather Notification API is a Node.js application designed to store users' emails and locations, and automatically send hourly weather reports every 3 hours. The API also allows users to retrieve their weather data for a specific day from a MongoDB database.

# Features
Store User Details: Add users with their email and location.

Update User Location: Modify the location for an existing user.

Fetch Weather Data: Retrieve users' weather data for a specific day.

Automatic Weather Reports: Fetch weather data every 3 hours for each user's location and store it in the database.

Technologies Used
Node.js: JavaScript runtime for building the API.
Express: Web framework for building RESTful APIs.
Mongoose: ODM library for MongoDB to manage data and schemas.
OpenWeatherMap API: External API to fetch weather data.
Postman: Tool for testing API routes (Postman Collection provided).


# Issues
question
 Use (Nodemailer + Gmail ) or another email service to send hourly weather reports to
 the users’ emails every 3 hours.
 6. Try to use OpenAI or Gemini APIs to generate a text about the weather and include it in
 the weather report.

 in this question i tried to do in my best .but in our google accounts cannot do two factor authentication. so send weather report is not success for me. And i tried different kind of mail servers but we have to give them from and to emails. cannot fetch from database.
 
7. Howtouse Google cloud to get the city name from the coordinates
