import app, { init } from "@/app";
import httpStatus from "http-status";
import supertest from "supertest";
import { createHotel } from "../factories";
import { cleanDb } from "../helpers";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("GET /hotels", () => {
  it("should respond with status 204 when there is no hotel", async () => {
    const response = await server.get("/hotels");

    expect(response.status).toBe(httpStatus.NO_CONTENT);
  });

  it("should respond with status 200 and with hotel data", async () => {
    const hotel = await createHotel();

    const response = await server.get("/hotels");

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual([
      {
        id: hotel.id,
        name: hotel.name,
        image: hotel.image,
        createdAt: hotel.createdAt.toISOString(),
        updatedAt: hotel.updatedAt.toISOString()
      }
    ]);
  });
});
