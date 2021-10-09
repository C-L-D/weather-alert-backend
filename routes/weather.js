// plan
// require router
// intialise router
// require model functions
// get request:
// use model function to fetch weather data
// return in variable
// res.json response
// export router

const { Router } = require("express");
const router = Router();
const getWeatherData = require("../models/weather");

router.get("/", (req, res) => {
  const { lat, long } = req.query;
  const weatherData = getWeatherData(lat, long);

  if (weatherData.rows.success != true) {
    res.json({ success: false, message: "Weather data were not retrieved" });
  }

  res.json({
    success: true,
    message: "Here is the weather data",
    payload: { pressure: weatherData.payload },
  });
});

module.exports = router;
