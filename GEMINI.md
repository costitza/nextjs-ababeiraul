# Project Context: Raul Ababei Portfolio (Next.js Migration)

## Repository of old website
- **URL**: https://github.com/costitza/personal_website
- **Description**: Personal portfolio migration from vanilla HTML/JS to Next.js 15+

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4 preferred)
- **Components**: shadcn/ui (Radix UI primitives)
- **Database/Data**: Static JSON files (`/data/projects.json`)
- **Deployment**: Vercel

## Coding Standards
- **Component Structure**: Use Functional Components with Arrow Functions.
- **Styling**: Use Tailwind utility classes exclusively. Avoid custom CSS files unless absolutely necessary for complex animations.
- **Icons**: Use `lucide-react` for general icons and `simple-icons` for social/brand icons.
- **Type Safety**: Define interfaces for all data structures (e.g., `Project`, `User`) in a dedicated `types/` directory.
- **Dark Mode**: The site should default to a "Dark" theme with a gradient background (`#000000` to `#15313f`).

## Project Structure
- `app/`: Contains all routes and layouts.
- `components/`: Shared UI components (Navbar, Footer, ProjectCard).
- `data/`: Source JSON files for projects and user info.
- `public/`: Static assets like images and PDFs (e.g., `resume.pdf`).

## Content Migration Workflow
- **Extraction**: When asked to migrate project details, read the corresponding `.html` file in the legacy `/pages` directory.
- **Parsing**: Identify the `overview`, `key features`, `technical architecture`, and `technical stack` sections.
- **Data Enrichment**: Append this extracted content into a `detailedDescription` field within `data/projects.json`.
- **Dynamic Routing**: Use the enriched JSON to populate a dynamic route at `app/projects/[slug]/page.tsx`.

## Agentic Instructions
- **File Operations**: When creating new pages, always check `data/projects.json` to ensure consistency with existing project data.
- **Testing**: After generating a component, suggest a basic test structure using Vitest or React Testing Library.
- **Self-Correction**: If a build error occurs during `npm run dev`, read the error log and fix the component before asking for user input.
