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

export async function getHotelRoom(req: AuthenticatedRequest, res: Response) {
  const { hotelId } = req.query;

  if (!hotelId) return res.status(httpStatus.BAD_REQUEST);
  try {
    const rooms = await hotelService.getRooms(Number(hotelId));
    if(!rooms) return res.status(httpStatus.NOT_FOUND);

    return res.status(httpStatus.OK).send(rooms);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
