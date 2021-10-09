// plan
// require router
// intialise router
// require model functions
// get request:
// use model function to fetch pollen data
// return in variable
// res.json response
// export router

const { Router } = require("express");
const router = Router();
const getPollenData = require("../models/pollen");

router.get("/", (req, res) => {
  const { lat, long } = req.query;
  const pollenData = getPollenData(lat, long);

  if (pollenData.rows.success != true) {
    res.json({ success: false, message: "Pollen data were not retrieved" });
  }

  res.json({
    success: true,
    message: "Here is the pollen data",
    payload: { pollen: pollenData.payload },
  });
});

module.exports = router;
