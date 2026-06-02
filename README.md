# WebSpatial Shop

A guided getting-started project for building spatial web experiences with React, Vite, TypeScript, and the WebSpatial SDK.

This project is a small e-commerce storefront that demonstrates how a familiar 2D web interface can progressively become a spatial experience. Product cards and detail pages render ordinary thumbnail images in unsupported browsers, then switch to interactive spatial 3D models when the app is running in a WebSpatial-capable environment.

## What you will learn

- How to scaffold a React + Vite app for WebSpatial experiments.
- How to render WebSpatial 3D models with `@webspatial/react-sdk`.
- How to safely fall back to standard HTML images when WebSpatial is unavailable.
- How to structure public 3D assets for a storefront-style demo.
- How to run the same project in a normal browser and WebSpatial preview tooling.
- How to build and deploy the finished app to Vercel.

## Demo concept

The app presents a modern storefront with a small product catalog. Each product has:

- Storefront metadata such as name, price, category, rating, and availability.
- A thumbnail image for regular browsers.
- A 3D model asset for WebSpatial-enabled rendering.
- A product detail route with supporting copy, specs, and related products.

The core progressive-enhancement behavior lives in `src/components/Model3D.tsx`. It checks whether WebSpatial is available through `@webspatial/core-sdk`; if it is, the app renders a WebSpatial `<Model>`. If not, it renders the product thumbnail instead.

## Tech stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui-style primitives
- WebSpatial SDK
- Vercel deployment

## Project structure

```text
public/
  models/                 3D product assets and thumbnails
src/
  components/Model3D.tsx  WebSpatial model renderer with image fallback
  components/ProductCard.tsx
  data/products.ts        Product catalog and model asset paths
  MainPage.tsx            Storefront/catalog page
  ProductPage.tsx         Product detail page
  Router.tsx              App routes
```

## Prerequisites

- Node.js
- npm
- A modern Chromium or Safari browser for regular web preview
- Optional: Apple Vision Pro simulator tooling for visionOS testing

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

In a normal browser, the product media areas intentionally show thumbnail images instead of loading 3D models. This keeps the baseline web experience simple and avoids relying on spatial browser APIs where they are not supported.

## Walkthrough

This sample uses progressive enhancement rather than a separate XR-only app:

1. `src/data/products.ts` stores normal product metadata alongside thumbnail and GLB model paths.
2. `src/components/Model3D.tsx` checks whether the app is running in a WebSpatial-capable environment.
3. In regular browsers, product media renders accessible thumbnail images.
4. In WebSpatial-capable runtimes, the same component renders a WebSpatial `<Model enable-xr>` with the thumbnail as fallback content.
5. `src/ProductPage.tsx` uses a `ModelRef` to animate supported spatial models on the detail page.
6. `public/manifest.webmanifest` declares the XR main scene size used by spatial launch contexts.

For a video or code walkthrough, start with `src/components/Model3D.tsx`, then follow the data flow from `src/data/products.ts` into `src/components/ProductCard.tsx` and `src/ProductPage.tsx`.

## Running on Apple Vision Pro tooling

Build the app and launch it through the WebSpatial builder flow:

```bash
npm run avp
```

This script builds the Vite app and runs:

```bash
webspatial-builder run --base=http://localhost:5173
```

Use this path when you want to validate the WebSpatial model rendering path.

## Building for production

Run the TypeScript check and production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying

The project is ready to deploy to Vercel:

```bash
vercel deploy --prod
```

If you connect the repository to a Vercel project, pushes to the production branch can trigger production deployments automatically.

## Guided project ideas

Use this starter as a foundation for learning WebSpatial by trying these exercises:

1. Add another product to `src/data/products.ts` with a thumbnail and model asset.
2. Adjust `Model3D` so unsupported browsers show a custom callout next to the thumbnail.
3. Add spatial interactions such as tap, drag, rotate, or magnify handlers to supported model views.
4. Experiment with model scale and depth using the CSS custom properties on the product media containers.
5. Replace the sample storefront copy with your own product domain.

## Asset attribution

The sample catalog uses public product-style 3D assets from Poly Haven. Generated thumbnails and converted GLB files are included under `public/models` for sample convenience.

- Drill 01: <https://polyhaven.com/a/drill_01>
- Chess Set: <https://polyhaven.com/a/chess_set>
- Megaphone 01: <https://polyhaven.com/a/megaphone_01>
- Potted Plant 02: <https://polyhaven.com/a/potted_plant_02>
- Garden Gnome: <https://polyhaven.com/a/garden_gnome>
- Lubricant Spray: <https://polyhaven.com/a/lubricant_spray>

If you redistribute this project or replace the sample assets, review the license and attribution requirements for any assets you add.

## License

Source code in this repository is intended to be published under the MIT License. Add the matching `LICENSE` file before public release.

The included 3D assets remain subject to their source asset licenses. See [Asset attribution](#asset-attribution) for source links.
