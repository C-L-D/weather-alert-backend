// Plan
// require weather router
// require supertest
// require app
// Route should:
// respond with a JSON
// JSON should contain pressure data
// should be successful

const weatherRouter = require("./weather.js");
const request = require("supertest");
const app = require("../app");

describe("GET /weather", function () {
  test("is successful", async () => {
    const response = await request(app).get("/weather");
    expect(response.statusCode).toBe(200);
  });
  test("returns a JSON", async () => {
    const response = await request(app).get("/weather");
    expect(response.headers).toContain({ "Content-Type": "JSON" });
  });
  test("contains pressure data", async () => {
    const response = await request(app).get("/weather");
    expect(response.body.data).toContain("pressure");
  });
  test("pressure data is a number", async () => {
    const response = await request(app).get("/weather");
    expect(typeof response.body.data.pressure).toBe("number");
  });
});
