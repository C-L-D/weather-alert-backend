# Plan

## What the backend needs to do

- Recieve a GET request from the frontend
- Make a fetch request to the weather APIs
- Store last response data to compare time. Do not get new data if last response less than 1 h old
- Return the pollen and atmospheric pressure data in JSON format to the frontend

## Routes required

- GET "/weather"

## Models required

- getWeatherData
