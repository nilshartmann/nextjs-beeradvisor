import { Shop, ShopApiResponse } from "@/app/types";
import styles from "./page.module.css";
import prisma from "@/app/lib/prisma";
import React, { Suspense } from "react";
import Link from "next/link";
import LoadingIndicator from "@/app/components/LoadingIndicator";
type ShopResponse = ShopApiResponse<Shop>;

async function sleep() {
  return new Promise((res) => {
    setTimeout(() => res(null), 1200);
  });
}

async function fetchShop(shopId: string) {
  const url = `http://localhost:7000/shops/${shopId}`;
  console.log("Fetching from ", url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Loading beer ${shopId} failed with status code ${response.status}`
    );
  }

  return response.json() as Promise<ShopResponse>;
}
type ShopPageProps = { params: { shopId: string } };
export default async function ShopPage({ params }: ShopPageProps) {
  const { data: shop } = await fetchShop(params.shopId);

  return (
    <div className={styles.ShopPage}>
      <div className={styles.DescriptionTitle}>
        <h1>{shop.name}</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "50px" }}>
          <div className={styles.Title}>
            <h1>where to find</h1>
          </div>
          <div>
            <div className={styles.Address}>
              {shop.street}
              <br />
              {shop.postalcode} {shop.city}
              <br />
              {shop.country}
            </div>
          </div>
        </div>

        <div className={styles.Title}>
          <h1>what&apos;s in stock</h1>

          <div className={styles.Beers}>
            {shop.beers.map((beerId) => (
              <Suspense
                key={beerId}
                fallback={<LoadingIndicator secondary placeholder={"🍺"} />}
              >
                <BeerInStock beerId={beerId} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

async function loadBeer(beerId: string) {
  const beer = await prisma.beer.findUnique({
    where: {
      id: beerId,
    },
    select: {
      id: true,
      name: true,
    },
  });

  await sleep();
  return beer;
}

type BeerInStockProps = {
  beerId: string;
};

async function BeerInStock({ beerId }: BeerInStockProps) {
  const beer = await loadBeer(beerId);

  if (!beer) {
    return null;
  }

  return (
    <div className={styles.Beer}>
      <Link href={`/beers/${beerId}`}>{beer.name}</Link>
    </div>
  );
}
