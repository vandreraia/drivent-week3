import { prisma } from "@/config";

async function findHotel() {
  return prisma.hotel.findMany();
}

async function findRoom(hotelId: number) {
  return prisma.hotel.findMany({
    where: {
      id: hotelId
    }, 
    include: {
      Rooms: true
    }
  });
}
const hotelRepository = {
  findHotel,
  findRoom
};

export default hotelRepository;
