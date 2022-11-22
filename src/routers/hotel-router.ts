import { getHotel } from "@/controllers/hotel-controller";
import { Router } from "express";

const hotelRouter = Router();

hotelRouter.get("/", getHotel);

export { hotelRouter };
