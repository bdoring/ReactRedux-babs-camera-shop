# ReactRedux-babs-camera-shop
Small web application simulating a camera shop to showcase React-Redux knowledge.

## Technologies Used:
- React
- Redux
- Express
- Knex
- PostgreSQL

## Instalation:
Follow the steps below to get this app up and running!

**BACK END:**
1. cd into `react-babs-camera-shop-backend`.
2. Install dependencies: `npm install`.
3. Create a database named `camera_shop` (please keep in mind that this application uses PostgreSQL).
4. After you have created a database, create your cameras table by running: `knex migrate:latest`.
5. Seed your table: `knex seed:run`.
6. Spin up your server: `node server.js`. Or if you have nodemon installed: `nodemon`.

**FRONT END:**
1. cd into `react-babs-camera-shop-frontend`
2. Run app: `npm start` or `yarn start`.


## User Stories:

1. When the user clicks "Add to Cart", the item is added to the cart.
2. The user can remove an item from the cart by clicking on a button.
3. The subtotal, tax (use 8.6%), and total are calculated in place.
4. The `CHECKOUT` button takes the user to the `CHECKOUT` page.
5. The `PLACE ORDER` button does not have any functionality at this time.
