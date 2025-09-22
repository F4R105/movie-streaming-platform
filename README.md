# 🎬 Movie Streaming platform
- Named it MoviePulse

## 🔗 GitHub Repository

[👉 View the full source code on GitHub](https://github.com/F4R105/movie-streaming-platform)

---

## 📘 Documentation

### ✅ Key Features

- 🔍 **Search & Filter Movies**: Browse by genre, year, and rating using TMDb data
- 🎥 **Movie Details & Recommendations**: View description, release date, runtime, genres, rating and recommended titles
- 🌗 **Theme-Aware UI**: Fully responsive, dark/light mode support
- 🔐 **Authentication**: Google SSO via Clerk with protected routes

---

### 🗂️ Project Structure

```
src/
├── components/         # Reusable UI components (Hero, Loader, Filters, etc.)
├── pages/              # Route-based views (Home, Register, Dashboard, etc.)
├── lib/                # API clients and utility functions (tmdb.ts)
├── types.ts            # TypeScript interfaces (Movie, Genre, etc.)
├── router.tsx          # React Router config with protected routes
└── App.tsx             # Main app entry
```

---

### ⚠️ Known Issues / Limitations

- Limited access to user-specific movie data (e.g. recommendations, movie browsed, watchlist) due to using Clerk for authentication instead of TMDb’s native user auth system. So, both are hardcoded.

---

## 🧰 External Libraries & Tools Used

| Tool / Library         | Purpose                                  |
|------------------------|------------------------------------------|
| [Clerk](https://clerk.dev)             | Authentication & SSO (Google)         |
| [TMDb API](https://www.themoviedb.org/documentation/api) | Movie data & metadata                |
| [Recharts](https://recharts.org)       | Data visualization (bar/pie charts)   |
| [Shadcn UI](https://ui.shadcn.com)     | UI components (Button, Card, etc.)    |
| [React Router](https://reactrouter.com) | Routing & protected routes            |
| [Tailwind CSS](https://tailwindcss.com) | Styling & theme support               |
| [Vite](https://vitejs.dev)             | Build tool & dev server               |
| [Favicon.io](https://favicon.io)       | Favicon generator                     |
| [React Spinners](https://www.davidhu.io/react-spinners/) | Loading animations                    |
| **[Microsoft Copilot](https://copilot.microsoft.com)** | AI-powered coding assistant, logic design, documentation, and debugging support |

---