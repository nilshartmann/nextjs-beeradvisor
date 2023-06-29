export type Shop = {
  id: string;
  name: string;
  street: string;
  postalcode: string;
  city: string;
  country: string;
  openinghours: string;
  beers: string[];
};

/**
 * For tracing and demo purposes the Shop API sends some meta-data
 * that wouldn't be sent in a real application
 */
export type ShopApiResponseMetaData = {
  /** when did the CLIENT sent the request? */
  sentAt: string;
  /** when did the SERVER receive the request? */
  receivedAt: string;
  timeout?: string;
  cacheMaxAge?: string;
  requestId: string;
  path: string;
};

export type ShopApiResponse<PAYLOAD> = {
  data: PAYLOAD;
  meta: ShopApiResponseMetaData;
};

export type AddRatingRequestBody = {
  beerId: string;
  username: string;
  stars: number;
  comment: string;
};
