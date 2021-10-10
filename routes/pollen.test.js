// Plan
// require pollen router
// require supertest
// require app
// Route should:
// respond with a JSON
// JSON should contain pollen data
// should be successful

const pollenRouter = require("./pollen.js");
const request = require("supertest");
const app = require("../app");

describe("GET /pollen", function () {
  test("is successful", async () => {
    const response = await request(app).get("/pollen");
    expect(response.statusCode).toBe(200);
  });
  test("returns a JSON", async () => {
    const response = await request(app).get("/pollen");
    expect(response.headers).toContain({ "Content-Type": "JSON" });
  });
  test("contains grass pollen data", async () => {
    const response = await request(app).get("/pollen");
    expect(response.body.data[0].Count).toContain("grass_pollen");
  });
  test("contains tree pollen data", async () => {
    const response = await request(app).get("/pollen");
    expect(response.body.data[0].Count).toContain("tree_pollen");
  });
  test("contains weed pollen data", async () => {
    const response = await request(app).get("/pollen");
    expect(response.body.data[0].Count).toContain("weed_pollen");
  });
});
