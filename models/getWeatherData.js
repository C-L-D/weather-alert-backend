// plan
// set up fetch function fron node-fetch
// async function getPollenData
// takes in lat and long, data, units, timesteps, start time, end time.
// await fetch to API
// headers with content-type
// await res.json
// if successful return data.timelines.intervals
// else return success: false.
// export function

const queryString = require("query-string");
const moment = require("moment");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let lastResponse = require("../modelData/weatherResponse");
let checkTime;

const url = "https://api.tomorrow.io/v4/timelines";
const apikey = process.env.TOMORROW_API_KEY;
const fields = ["treeIndex", "grassIndex", "weedIndex", "pressureSurfaceLevel"];
const units = "metric";
const timesteps = ["current"];
const time = moment.utc();
const startTime = moment.utc(time).add(0, "minutes").toISOstring;
const endTime = moment.utc(time).add(3, "hours").toISOstring;
const timezone = "GMT";

async function getWeatherData(lat, long) {
  const location = `${lat}, ${long}`;
  const params = queryString.stringify(
    {
      apikey,
      location,
      fields,
      units,
      timesteps,
      startTime,
      endTime,
      timezone,
    },
    { arrayformat: "comma" }
  );

  if (lastResponse.data.timelines[0].startTime != checkTime) {
    console.log("running get request", params);
    const res = await fetch(`${url}?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    lastResponse = data;
    checkTime = moment.utc(time).add(1, "hours").toISOstring;
    console.log("here is the data", data);
    return data;
  } else {
    return lastResponse;
  }
}

module.exports = getWeatherData;
