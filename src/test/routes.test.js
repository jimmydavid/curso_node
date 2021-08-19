process.env.NODE_ENV = "test";
const db = require("../database/models/index");
const supertest = require("supertest");
const app = require("../server");

beforeAll(async () => {

  // Prevents error: getConnection was called after the connection manager was closed
  await db.sequelize.sync()

});

test("GET /", async () => {
  
  await supertest(app).get("/")
    .expect(200)
});

afterAll(done => {

  // Closing the DB connection allows Jest to exit successfully:
  db.sequelize.close()
  done()

});