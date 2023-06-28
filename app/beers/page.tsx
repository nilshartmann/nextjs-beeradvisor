import styles from "./page.module.css";
import prisma from "@/app/lib/prisma";
import Link from "next/link";
import Stars from "@/app/components/Stars";
import AppLink from "@/app/components/AppLink";
import ButtonBar from "@/app/components/ButtonBar";
import OrderByButton from "@/app/beers/OrderByButton";

function calcAverageStars(stars: { stars: number }[]) {
  const sum = stars.map((s) => s.stars).reduce((a, b) => a + b, 0);
  const avg = sum / stars.length || 0;
  return avg;
}

type BeerListPageProps = {
  searchParams?: { [key: string]: string };
};
export default async function BeerListPage({
  searchParams,
}: BeerListPageProps) {
  const orderBy = searchParams?.order_by || "name_asc";

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
    orderBy: {
      name: orderBy === "name_asc" ? "asc" : "desc",
    },
  });

  return (
    <>
      <ButtonBar>
        <OrderByButton orderBy={"name_asc"} />
        <OrderByButton orderBy={"name_desc"} />
      </ButtonBar>
      <div className={styles.BeerOverview}>
        {beers.map((beer) => (
          <BeerImage
            key={beer.id}
            name={beer.name}
            stars={calcAverageStars(beer.ratings)}
            imgUrl={`/assets/beer/${beer.id}-256x256-thumb.jpg`}
            href={`/beers/${beer.id}`}
          />
        ))}
      </div>
    </>
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
