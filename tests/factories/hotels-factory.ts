import { prisma } from "@/config";
import faker from "@faker-js/faker";

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.random.locale(),
      image: faker.image.imageUrl()
    }
  });
}

export async function createRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.animal.type(),
      capacity: faker.datatype.number(),
      hotelId
    },
    include: {
      Hotel: true
    }
  });
}
