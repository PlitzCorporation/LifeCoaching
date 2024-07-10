This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project contains the basic kit that comes from a first installation plus some tweaks we use at Plitz7.

- Tailwinds with some changes in how to load fonts.
- Some Global CSS pre-setup as we like to use in almost all of our projects.
- Some TS tweaks to adapt to the way we feel more confortable working.

## About this repo

This git repository is a starting template for new clients. It has basic setup that we use every time we begin the development process of a new web application, and the intention is to avoid doing the same things we do every time and just replace things like fonts, or some basic styling that doesn't apply to the new client.

## Things to start with

- Change the git origin of this repository to the one you will use for the new project
- Change the name and port of the project in the `package.json`
- Fonts in `FontSettings.ts` file and `Tailwind.config.ts`
- Colors in `Tailwind.config.ts`
- Folder customization for components and other utilities
