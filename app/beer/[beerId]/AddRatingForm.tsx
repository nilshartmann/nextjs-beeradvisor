"use client";
import * as React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

type NewRating = {
  comment: string;
  stars: string;
};

type RatingFormProps = {
  beerName: string;
  beerId: string;
};

export default function RatingForm({ beerName }: RatingFormProps) {
  const error = "";

  return (
    <div className={styles.Form}>
      <form>
        <fieldset>
          <div>
            <label>Your name:</label>{" "}
            <input type="text" required name={"username"} />
          </div>
          <div>
            <label>Your rating (1-5):</label>{" "}
            <input type="number" required name="stars" min="1" max="5" />
          </div>
          <div>
            <label>Your comment:</label>{" "}
            <input
              name="comment"
              required
              minLength={3}
              maxLength={128}
              onInvalid={(e) =>
                !e.currentTarget.validity.valid
                  ? e.currentTarget.setCustomValidity(
                      "Please enter a comment with at least 3 and at most 128 characters."
                    )
                  : undefined
              }
              type="text"
            />
          </div>
          <div>
            <button type="submit">Leave rating for {beerName}</button>
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
