# Golden Grain Rice Shop: project notes

## What the app is for
An online shop for a rice seller. Customers read about the shop and browse rice types, then add them to a cart to see a total. Aimed at home cooks and restaurant buyers.

## Main screens
- **Home** (`/`): welcome banner, a call to action to the shop, and three featured rices.
- **Shop** (`/#/shop`): all six rice products with price and size, an "Add to cart" button for each, and a cart box with count, items and total.

## API endpoints
None yet. Products are sample data in `src/data/products.js`.

## Screens that work without saving (trial)
- **Shop cart**: adding items only changes the page's own state. It is lost on reload and shows "Not saved yet: upgrade to keep your changes". After upgrading, switch it to real saving.

## Decisions
- First version: home page and shop, no accounts, no checkout.
- Sample rice list and prices are placeholders the user can change.
