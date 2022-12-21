# calebjs.io

- **Framework:** [Nextjs13:](https://nextjs.org)
- **Database:** [PlanetScale:](https://planetscale.com)
- **ORM:** [Prisma:](https://www.prisma.io)
- **Authentication:** [NextAuth.js:](https://next-auth.js.org)
- **Deployment:** [Vercel:](https://vercel.com)
- **CMS:** [Sanity:](https://www.sanity.io)
- **Styling:** [Tailwind CSS:](https://tailwindcss.com)

# Overview 

- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - API Routes powering /dashboard, newsletter subscription, guestbook, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/dashboard` - Personal dashboard tracking metrics.
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.