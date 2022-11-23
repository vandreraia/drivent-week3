import { prisma } from "@/config";

async function findHotel() {
  return prisma.hotel.findMany();
}

async function findRoom(hotelId: number) {
  return prisma.room.findMany({
    where: {
      hotelId
    }
  });
}
const hotelRepository = {
  findHotel,
  findRoom
};

export default hotelRepository;
