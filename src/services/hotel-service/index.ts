import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";

async function getHotels() {
  const hotels = await hotelRepository.findHotel();

  return hotels;
}

async function getRooms(hotelId: number) {
  const rooms = await hotelRepository.findRoom(hotelId);

  return rooms;
}

const hotelService = {
  getHotels,
  getRooms
};

export default hotelService;
