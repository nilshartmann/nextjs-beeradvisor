# "BeerAdvisor" Next.js Sample application

# Start:

Run the following commands all from the root directory:

### 1. Database
* use docker-compose to start the database
  * Note: port `1360` must be available
```bash
docker-compose
```
  * if you want to connect to the running database either use docker or connect with your fav db tool
    (for connection data see docker-compose file here)
* on first run: setup the database content
```bash
pnpm db:reset
```

### 2. Shop API
* Start "Shop API" by running `pnpm shop-backend`

### 3. Start nextjs application

* Install dependencies:
```bash 
pnpm install
```

* Start the application in dev mode:

```bash 
pnpm dev
```
