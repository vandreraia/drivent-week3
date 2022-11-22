import { prisma } from "@/config";

async function findHotel() {
  return prisma.hotel.findMany({
    include: {
      Rooms: true
    }
  });
}

const hotelRepository = {
  findHotel,
};

export default hotelRepository;
