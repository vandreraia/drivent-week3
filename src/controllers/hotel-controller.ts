import { AuthenticatedRequest } from "@/middlewares";
import hotelService from "@/services/hotel-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getHotel(req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelService.getHotels();
    if (hotels.length === 0) return res.status(httpStatus.NO_CONTENT).send(hotels);

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getHotelRoom(req: AuthenticatedRequest, res: Response) {
  const { hotelId } = req.params;

  if (!hotelId) return res.sendStatus(httpStatus.BAD_REQUEST);
  try {
    const rooms = await hotelService.getRooms(Number(hotelId));
    if (rooms.length === 0) return res.sendStatus(httpStatus.NOT_FOUND);

    return res.status(httpStatus.OK).send(rooms);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
