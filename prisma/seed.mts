import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.beer.upsert({
    where: { id: "B1" },
    update: {},
    create: {
      id: "B1",
      name: "Barfüßer",
      price: "3,80 EUR",
      ratings: {
        create: [
          {
            username: "Waldemar Vasu",
            id: "R1",
            comment: "Exceptional!",
            stars: 4,
          },
          { username: "Karl Marx", id: "R7", comment: "Awwwesome!", stars: 4 },
          {
            username: "Alessa Bradley",
            id: "R9",
            comment: "Can I order another please?",
            stars: 5,
          },
        ],
      },
    },
  });

  await prisma.beer.upsert({
    where: { id: "B2" },
    update: {},
    create: {
      id: "B2",
      name: "Frydenlund",
      price: "150 NOK",
      ratings: {
        create: [
          {
            username: "Waldemar Vasu",
            id: "R2",
            comment: "Very good!",
            stars: 4,
          },
          {
            username: "Alessa Bradley",
            id: "R8",
            comment: "phenomenal!",
            stars: 5,
          },
          {
            username: "Lauren Jones",
            id: "R15",
            comment:
              "Delicate buttery flavor, with notes of sherry and old newsprint",
            stars: 2,
          },
        ],
      },
    },
  });

  await prisma.beer.upsert({
    where: { id: "B3" },
    update: {},
    create: {
      id: "B3",
      name: "Grieskirchner",
      price: "3,20 EUR",
      ratings: {
        create: [
          {
            username: "Waldemar Vasu",
            id: "R3",
            comment: "Great taste!",
            stars: 3,
          },
          { username: "Nils", id: "R10", comment: "Tastes moreish", stars: 4 },
        ],
      },
    },
  });

  await prisma.beer.upsert({
    where: { id: "B4" },
    update: {},
    create: {
      id: "B4",
      name: "Tuborg",
      price: "5,50 EUR",
      ratings: {
        create: [
          {
            username: "Nils",
            id: "R4",
            comment: "Try it, you'll love it!",
            stars: 3,
          },
          {
            username: "Lauren Jones",
            id: "R11",
            comment: "Hmmmm!!!!",
            stars: 3,
          },
        ],
      },
    },
  });

  await prisma.beer.upsert({
    where: { id: "B5" },
    update: {},
    create: {
      id: "B5",
      name: "Baltic Tripple",
      price: "6,95 EUR",
      ratings: {
        create: [
          {
            username: "Karl Marx",
            id: "R5",
            comment: "My favorite!",
            stars: 4,
          },
          {
            username: "Alessa Bradley",
            id: "R12",
            comment: "Watery mouthfeel and long finish.",
            stars: 3,
          },
        ],
      },
    },
  });

  await prisma.beer.upsert({
    where: { id: "B6" },
    update: {},
    create: {
      id: "B6",
      name: "Viktoria Bier",
      price: "4,20 EUR",
      ratings: {
        create: [
          {
            username: "Lauren Jones",
            id: "R6",
            comment: "Awwwesome!",
            stars: 4,
          },
          { username: "Karl Marx", id: "R13", comment: "✊...", stars: 5 },
        ],
      },
    },
  });

  await prisma.beer.upsert({
    where: { id: "B7" },
    update: {},
    create: {
      id: "B7",
      name: "Pinkus",
      price: "3,90 EUR",
      ratings: {
        create: [
          {
            username: "Nils",
            id: "R100",
            comment: "Tasty!!!",
            stars: 4,
          },
          { username: "Alessa Bradley", id: "R101", comment: "great!", stars: 5 },
        ],
      },
    },
  });

  const allUsers = await prisma.beer.findMany({
    include: { ratings: true },
  });

  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
