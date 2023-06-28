import * as React from "react";
import styles from "./page.module.css";
import { SingleBeer } from "@/app/beers/[beerId]/page";
import Stars from "@/app/components/Stars";

type RatingProps = {
  rating: SingleBeer["ratings"][0];
};

const Rating = ({ rating: { username, comment, stars } }: RatingProps) => (
  <div className={styles.Rating}>
    <span className={styles.Author}>{username}</span>:{" "}
    <span className={styles.Comment}>
      „{comment}“ <Stars stars={stars} />
    </span>
  </div>
);

export default Rating;
