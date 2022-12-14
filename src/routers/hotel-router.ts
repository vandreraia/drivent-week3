import { getHotel, getHotelRoom } from "@/controllers/hotel-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const hotelRouter = Router();

hotelRouter
  .all("/*", authenticateToken)
  .get("/", getHotel)
  .get("/:hotelId", getHotelRoom);

export { hotelRouter };
