import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Laptop",
        description: "High performance laptop",
        price: 800,
        imageUrl: "https://via.placeholder.com/150"
      },
      {
        name: "Headphones",
        description: "Noise cancelling headphones",
        price: 200,
        imageUrl: "https://via.placeholder.com/150"
      },
      {
        name: "Smartphone",
        description: "Latest smartphone",
        price: 600,
        imageUrl: "https://via.placeholder.com/150"
      }
    ]
  });
}

main()
  .then(() => console.log("Seeding complete"))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
