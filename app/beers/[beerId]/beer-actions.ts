"use server";

import { AddRatingRequestBody } from "@/app/types";
import { v4 as uuid } from "uuid";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import invariant from "tiny-invariant";
import { revalidatePath } from "next/cache";

function formString(formData: FormData, key: string): string {
  const c = formData.get(key);
  invariant(
    typeof c === "string",
    `Key '${key}' with value '${c}' expected to be string`
  );

  return c;
}

export async function saveNewRating(formData: FormData) {
  const beerId = formString(formData, "beerId");
  const username = formString(formData, "username");
  const comment = formString(formData, "comment");
  const stars = parseInt(formString(formData, "stars"));

  console.log("Save rating", beerId, username, comment, stars);

  const id = uuid();
  await prisma.rating.create({
    data: {
      id,
      beerId,
      username,
      stars,
      comment,
    },
  });

  revalidatePath(`/beers/${beerId}`, "page");

  return { status: "created" } as const;
}

export async function saveNewRatingPrev(prev: any, formData: FormData) {
  const beerId = formString(formData, "beerId");
  const username = formString(formData, "username");
  const comment = formString(formData, "comment");
  const stars = parseInt(formString(formData, "stars"));

  console.log("Save rating", prev, beerId, username, comment, stars);

  const id = uuid();
  await prisma.rating.create({
    data: {
      id,
      beerId,
      username,
      stars,
      comment,
    },
  });

  revalidatePath(`/beers/${beerId}`, "page");

  return { status: "created" } as const;
}
