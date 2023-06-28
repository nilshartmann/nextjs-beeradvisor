import styles from "./page.module.css";
import prisma from "@/app/lib/prisma";
import Link from "next/link";
import Stars from "@/app/components/Stars";
import AppLink from "@/app/components/AppLink";

function calcAverageStars(stars: { stars: number }[]) {
  const sum = stars.map((s) => s.stars).reduce((a, b) => a + b, 0);
  const avg = sum / stars.length || 0;
  return avg;
}

export default async function Home() {
  const beers = await prisma.beer.findMany({
    select: {
      id: true,
      name: true,
      ratings: {
        select: {
          stars: true,
        },
      },
    },
  });

  return (
    <div className={styles.BeerOverview}>
      {beers.map((beer) => (
        <BeerImage
          key={beer.id}
          name={beer.name}
          stars={calcAverageStars(beer.ratings)}
          imgUrl={`/assets/beer/${beer.id}-256x256-thumb.jpg`}
          href={`/beer/${beer.id}`}
        />
      ))}
    </div>
  );
}

type BeerImageProps = {
  imgUrl: string;
  name: string;
  stars: number;
  active?: boolean;
  href: string;
};

function BeerImage({ imgUrl, name, stars, href }: BeerImageProps) {
  return (
    <div className={styles.BeerImage}>
      <AppLink href={href}>
        <img alt={name} src={imgUrl} />
        <span className={styles.Label}>
          <h1>{name}</h1>
          <Stars stars={stars} />
        </span>
      </AppLink>
    </div>
  );
}
