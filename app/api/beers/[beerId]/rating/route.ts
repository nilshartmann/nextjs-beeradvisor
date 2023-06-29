import { NextRequest, NextResponse } from "next/server";
import { AddRatingRequestBody } from "@/app/types";
import prisma from "@/app/lib/prisma";
import { v4 as uuid } from "uuid";
import { revalidatePath } from "next/cache";

type AddRatingParams = { params: { beerId: string } };

export async function POST(request: NextRequest, { params }: AddRatingParams) {
  const beerId = params.beerId;
  const newRating = (await request.json()) as AddRatingRequestBody;

  const id = uuid();
  await prisma.rating.create({
    data: {
      id,
      beerId,
      username: newRating.username,
      stars: newRating.stars,
      comment: newRating.comment,
    },
  });

  return NextResponse.json(
    { id },
    {
      status: 201,
    }
  );
}
