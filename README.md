Romantic, minimalist “love letter” website built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

- Soft pastel background, lots of whitespace
- Serif letter typography (Playfair Display) + clean UI sans (Inter)
- Paragraphs + photos reveal slowly as you scroll
- Optional background music (off by default)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize content

### Letter text

- Edit `src/data/letter.ts`

### Photos (“memories”)

- Replace the placeholders in `public/memories/` with your own images
- Keep the same filenames (`01`, `02`, `03`) or update `src/data/letter.ts`

### Background music (optional)

- Add an audio file at `public/music.mp3`
- The play/pause button is in `src/components/MusicToggle.tsx`

## String art (secret section)

The string art “detail” is rendered with SVG and the pin sequence from `src/data/stringArt.ts`.

- Component: `src/components/StringArtSecretSection.tsx`
- Central image default: `public/memories/us.svg` (replace with your own photo)
- Hidden video: move/copy your MP4 into `public/secret/` and set `videoSrc`
  - Default expected path: `public/secret/our-video.mp4` -> `videoSrc="/secret/our-video.mp4"`
  - The modal opens after **3 clicks** on the center photo

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
