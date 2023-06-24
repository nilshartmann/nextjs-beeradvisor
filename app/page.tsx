import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/app/lib/prisma";

export default async function Home() {
  const allBeers = await prisma.beer.findMany({
    select: {
      id: true,
      ratings: {
        select: {
          stars: true,
        },
      },
    },
  });

  return (
    <main className={styles.main}>
      <ul>
        {allBeers.map((b) => {
          return <li key={b.id}>{b.ratings.map((r) => r.stars).join(", ")}</li>;
        })}
      </ul>
    </main>
  );
}
