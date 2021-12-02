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
  let response;
  beforeAll(() => {
    response = await request(app).get("/pollen");
  });

  test("is successful", async () => {
    expect(response.statusCode).toBe(200);
  });
  test("returns a JSON", async () => {
    expect(response.headers).toContain({ "Content-Type": "JSON" });
  });
  test("contains grass pollen data", async () => {
    expect(response.body.data[0].Count).toContain("grass_pollen");
  });
  test("contains tree pollen data", async () => {
    expect(response.body.data[0].Count).toContain("tree_pollen");
  });
  test("contains weed pollen data", async () => {
    expect(response.body.data[0].Count).toContain("weed_pollen");
  });
});

// .toMatchObject()
//expect(value).toEqual(expect.any(Number));
