import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";

async function getHotels() {
  const hotels = await hotelRepository.findHotel();

  if (!hotels) throw notFoundError();

  return hotels;
}

const hotelService = {
  getHotels
};

export default hotelService;
