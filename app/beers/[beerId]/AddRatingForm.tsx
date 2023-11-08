"use client";
import { useState } from "react";
import styles from "./Form.module.css";
import {
  saveNewRating,
  saveNewRatingPrev,
} from "@/app/beers/[beerId]/beer-actions";
import { useFormState } from "react-dom";

type RatingFormProps = {
  beerName: string;
  beerId: string;
};

export default function RatingForm({ beerName, beerId }: RatingFormProps) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState("");

  const buttonEnabled = !!username && !!stars && !!comment;
  const error = "";

  async function runSave(formData: FormData) {
    const r = await saveNewRating(formData);

    if (r.status === "created") {
      setUsername("");
      setComment("");
      setStars("");
    }
  }

  return (
    <div className={styles.Form}>
      <form action={runSave}>
        <fieldset>
          <div>
            <label>Your name:</label>{" "}
            <input type={"hidden"} name={"beerId"} value={beerId} />
            <input
              type="text"
              name={"username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Your rating (1-5):</label>{" "}
            <input
              type="number"
              name={"stars"}
              min="1"
              max="5"
              value={stars}
              onChange={(e) => setStars(e.target.value)}
            />
          </div>
          <div>
            <label>Your comment:</label>{" "}
            <input
              type="text"
              name={"comment"}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" disabled={!buttonEnabled}>
              Leave rating for {beerName}
            </button>
          </div>
          {error && (
            <div>
              <b>Could not add rating:</b> {error}
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
}
