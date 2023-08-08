/* eslint-disable @next/next/no-img-element */
import prisma from "@/app/lib/prisma";
import styles from "./page.module.css";
import React, { Suspense } from "react";
import Rating from "@/app/beers/[beerId]/Rating";
import RatingForm from "@/app/beers/[beerId]/AddRatingForm";
import { Shop, ShopApiResponse } from "@/app/types";
import Link from "next/link";
import AppLink from "@/app/components/AppLink";
import LoadingIndicator from "@/app/components/LoadingIndicator";
import RatingList from "@/app/beers/[beerId]/RatingList";

type ShopsReponse = ShopApiResponse<Shop[]>;

async function loadBeer(beerId: string) {
  const beer = await prisma.beer.findUnique({
    where: {
      id: beerId,
    },
    include: {
      ratings: true,
    },
  });
  return beer;
}

async function loadShops(beerId: string) {
  const url = `http://localhost:7000/shops?beerId=${beerId}`;
  console.log("Fetching from ", url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Loading beer ${beerId} failed with status code ${response.status}`
    );
  }

  return response.json() as Promise<ShopsReponse>;
}

export type SingleBeer = NonNullable<Awaited<ReturnType<typeof loadBeer>>>;

type BeerPageProps = { params: { beerId: string } };

export default async function BeerPage({ params }: BeerPageProps) {
  const shopsPromise = loadShops(params.beerId);
  const beer = await loadBeer(params.beerId);
  if (!beer) {
    //
    return <h1>Beer Not found</h1>;
  }

  return (
    <div>
      <div className={styles.Beer}>
        <div className={styles.DescriptionTitle}>
          <h1>{beer.name}</h1>
          <h3>{beer.price}</h3>
        </div>
        <div className={styles.Description}>
          <div className={styles.Img}>
            <img alt={beer.name} src={`/assets/beer/${beer.id}.jpg`} />
          </div>
          <div>
            <h1>Where to buy:</h1>

            <Suspense
              fallback={
                <div style={{ marginBottom: "1.5rem" }}>
                  <LoadingIndicator secondary />
                </div>
              }
            >
              <Shops shopsResponse={shopsPromise} />
            </Suspense>

            <RatingList beer={beer} />

            <h1>
              ...and what do <em>you</em> think?
            </h1>
            <RatingForm beerId={beer.id} beerName={beer.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

type WhereToBuyProps = {
  shopsResponse: Promise<ShopsReponse>;
};

async function Shops({ shopsResponse }: WhereToBuyProps) {
  const shops = await shopsResponse;
  return (
    <div className={styles.Shops}>
      {shops.data.map((shop, ix) => (
        <React.Fragment key={shop.id}>
          <div className={styles.Shop}>
            <AppLink href={`/shop/${shop.id}`}>
              <span className={styles.Name}>{shop.name}</span>
            </AppLink>
          </div>
          {ix < shops.data.length - 1 ? " | " : null}
        </React.Fragment>
      ))}
    </div>
  );
}

type ShopProps = {
  shop: Shop;
};
