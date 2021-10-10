// plan
// require router
// intialise router
// require model functions
// get request:
// use model function to fetch weather data
// return in variable
// res.json response
// export router

// use mock data for frontend development
// comment out API call
// import mock data
// return same data shape

const { Router } = require("express");
const router = Router();
const getWeatherData = require("../models/weather");
const mockWeatherData = require("../modelData/weatherResponse");

router.get("/", (req, res) => {
  const { lat, long } = req.query;
  /*
  const weatherData = getWeatherData(lat, long);

  if (weatherData.rows.success != true) {
    res.json({ success: false, message: "Weather data were not retrieved" });
  }*/

  const weatherData = { payload: mockWeatherData.data.pressure };

  res.json({
    success: true,
    message: "Here is the weather data",
    payload: { pressure: weatherData.payload },
  });
});

module.exports = router;
