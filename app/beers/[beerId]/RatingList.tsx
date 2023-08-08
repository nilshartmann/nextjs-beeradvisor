import styles from "@/app/beers/[beerId]/page.module.css";
import Rating from "@/app/beers/[beerId]/Rating";
import React from "react";
import { SingleBeer } from "@/app/beers/[beerId]/page";

type RatingListProps = {
  beer: SingleBeer;
};

export default function RatingList({ beer }: RatingListProps) {
  return (
    <div className={styles.Ratings}>
      <h1>What customers say:</h1>
      {beer.ratings.map((rating) => (
        <Rating key={rating.id} rating={rating} />
      ))}
    </div>
  );
}
