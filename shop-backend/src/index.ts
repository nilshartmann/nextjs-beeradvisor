import express, { Express, Request, Response } from "express";
import allShops from "./shop-data";

const port = process.env.PORT || 7000;
const slowEnabled = process.env.USE_SLOW === "true";

const app: Express = express();

app.set("etag", false);
app.use(express.json());

let requestCounter = 0;

app.use((req, res, next) => {
  // add meta data for tracing in demos

  console.log(`>>> Received ${req.method} Request to '${req.path}'`);
  const meta: Record<string, string | number | Date> = {};
  ++requestCounter;
  meta.path = req.path;
  meta.requestId = `${requestCounter}`;
  const sentAtHeader = req.query["beeradvisor-sent-at"];
  meta.sentAt = typeof sentAtHeader === "string" ? sentAtHeader : "";

  meta.receivedAt = new Date();
  res.set("x-shop-api-request-id", meta.requestId);
  res.locals.meta = meta;

  if (
    req.query.slow !== undefined &&
    req.query.slow !== "false" &&
    req.query.slow !== "0"
  ) {
    const timeout = Number(req.query.slow) || 1200;
    meta.timeout = timeout;
    console.log(`    😴 Slow down ${timeout}ms`);
    setTimeout(next, timeout);
  } else {
    next();
  }
});

app.get("/shops/:shopId", (req: Request, res: Response) => {
  const shopId = req.param("shopId");

  const shop = allShops.find((s) => s.id === shopId);

  if (!shop) {
    return res.status(404).json({
      error: `Shop with id '${shopId}' not found`,
      meta: res.locals.meta,
    });
  }
  res.json({
    data: shop,
    meta: res.locals.meta,
  });
});

app.get("/shops", (req: Request, res: Response) => {
  const beerId = req.query.beerId;

  const shops =
    typeof beerId === "string"
      ? allShops.filter((s) => s.beers.includes(beerId))
      : allShops;

  res.json({
    data: shops,
    meta: res.locals.meta,
  });
});

app.listen(port, () => {
  console.log(`
    📞    Shop API Server listening on port ${port}
    👉    Try http://localhost:${port}/shops
    👉    Try http://localhost:${port}/shops?beerId=B1
    😴    Simulate slowness: http://localhost:${port}/shops?slow`);
});
