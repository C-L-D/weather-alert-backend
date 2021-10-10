// plan
// require router
// intialise router
// require model functions
// get request:
// use model function to fetch pollen data
// return in variable
// res.json response
// export router

// use mock data for frontend development
// comment out API call
// import mock data
// return same data shape

const { Router } = require("express");
const router = Router();
const getPollenData = require("../models/pollen");
const mockPollenData = require("../modelData/pollenResponse");

router.get("/", (req, res) => {
  const { lat, long } = req.query;
  console.log(lat, long);
  /*
  const pollenData = getPollenData(lat, long);

  if (pollenData.rows.success != true) {
    res.json({ success: false, message: "Pollen data were not retrieved" });
  }
*/
  const pollenData = { payload: mockPollenData.data.Risk };

  res.json({
    success: true,
    message: "Here is the pollen data",
    payload: { pollen: pollenData.payload },
  });
});

module.exports = router;
