// Plan
// set up fetch function fron node-fetch
// async function getWeatherData
// takes in lat and long
// await fetch to API
// headers with x-api-key and content-type
// await res.json
// if successful return data.pressure
// else return success: false.
// export function

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const url = "https://api.ambeedata.com/weather/latest/by-lat-lng?";

async function getWeatherData(lat, long) {
  const res = await fetch(`${url}lat=${lat}&lng=${long}`, {
    headers: {
      "x-api-key": `${process.env.AMBEE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data.data);

  if (data.message != "success") {
    return { success: false };
  }
  return { success: true, payload: data.data.pressure };
}

module.exports = getWeatherData;
