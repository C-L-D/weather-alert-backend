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

const url = "https://api.tomorrow.io/v4/timelines";

let lastResponse;

const apikey = process.env.TOMORROW_API_KEY;

const fields = ["treeIndex", "grassIndex", "weedIndex", "pressureSurfaceLevel"];

const units = "metric";

const timesteps = ["current", "1h"];

const time = moment.utc();

const startTime = moment.utc(time).add(0, "minutes").toISOstring;

const endTime = moment.utc(time).add(3, "hours").toISOstring;

const timezone = "GMT";

async function getPollenData(lat, long) {
  const location = [lat, long];
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
  const res = await fetch(`${url}?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  lastResponse = data;
  console.log(data);

  if (data != true) {
    throw new Error();
  }
  return data.data.timlines.intervals;
}

module.exports = getWeatherData;
