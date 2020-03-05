const server = require('../api/server')
const request = require('supertest')
const db = require('../database/dbConfig')
const Users = require('../users/users-model')

describe('register', () => {
    it('should return status 201', async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({username: "brandy", password:"bigbet"})
        expect(res.status).toBe(201)
    })

  it("should return the user added", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "becker", password: "bigbet" });
    expect({ username: "becker" });
  });
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("login", () => {
  it("should return status 200", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "becker", password: "bigbet" });
    expect(res.status).toBe(200);
  });

  it("should return a token", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "mario", password: "bowser" });
    expect(res.body.token);
  });
});