const supertest = require("supertest");
const app = require("../../app");

it("should respond with a 200 status code", async () => {
  const response = await supertest(app).get("/api?id=100").send().expect(200);
  expect(response.body).toBeTruthy();
});

it("should have a primary image", async () => {
  const response = await supertest(app).get("/api?id=100").send().expect(200);
  expect(response.body.primaryImage).toBeTruthy();
});
