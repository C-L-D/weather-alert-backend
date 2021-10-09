# Plan

## What the backend needs to do

- Recieve a GET request from the frontend
- Make a fetch request to the weather APIs
- Return the pollen and atmospheric pressure data in JSON format to the frontend
- No storage of data is required due to frontend caching

## Routes required

- GET "/pollen"
- GET "/weather"

## Models required

- getPollenData
- getWeatherData
