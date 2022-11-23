import { AuthenticatedRequest } from "@/middlewares";
import hotelService from "@/services/hotel-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getHotel(req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelService.getHotels();
    if (!hotels) return res.status(httpStatus.NO_CONTENT);

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

