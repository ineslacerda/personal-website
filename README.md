# Inês Lacerda — Personal Portfolio

Personal portfolio website built for the Google Women Techmakers Ambassador application. Features AI leadership highlights, community impact, project showcases, and research publications.

## Tech stack

- **React + Vite** — component-based SPA with fast HMR
- **Tailwind CSS v3** — utility-first styling with a custom light theme
- **Framer Motion** — scroll-triggered animations and entrance transitions
- **react-icons** — brand SVG icons (LinkedIn, GitHub)

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Project structure

```
src/
├── App.jsx
├── index.css
├── assets/
│   └── profile_pic.jpeg
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── AILeadership.jsx
    ├── CommunityImpact.jsx
    ├── Projects.jsx
    ├── Research.jsx
    ├── Skills.jsx
    └── Contact.jsx
```

All content is hardcoded in the components — no CMS or external data fetching.
