# 🖼️ Infinite Masonry Gallery – Frontend Assignment

This project is a responsive, visually polished **infinite scroll gallery** built with **ReactJS** and **Tailwind CSS**. It renders a **masonry-style layout** of images and videos and includes smooth user experience enhancements like **skeleton loaders**, **fade-in animations**, and **route-based navigation**.

---

## 🚀 Tech Stack

- ⚛️ React (Functional Components + Hooks)
- 💨 Tailwind CSS
- 🔄 React Query (@tanstack/react-query)
- 📦 React Router
- 👁️‍🗨️ Intersection Observer (via `react-intersection-observer`)
- 🖼️ Mock API simulation for paginated data

---

## 📸 Features

### ✅ Masonry Layout
- Responsive column layout using Tailwind's `columns-*` utility.
- Preserves staggered layout even after image/video load using `break-inside-avoid`.

### ✅ Infinite Scroll
- Fetches additional content as the user scrolls down.
- Uses `useInfiniteQuery` + `Intersection Observer`.

### ✅ UX Enhancements
- Skeleton loaders during initial and next-page fetches.
- Smooth **fade-in from bottom** animation when media is loaded.
- Displays `"You’ve reached the end"` when all data is loaded.

### ✅ Routing
- Clicking an item navigates to `/g/:generation_id`.
- Route is directly accessible and loads content based on the `generation_id`.

---

## 📁 Project Structure

src/
│
├── api/
│ └── mockApi.js # Simulated API with offset + limit
│
├── components/
│ ├── Loader.jsx # Spinner loader
│ └── MediaSkeleton.jsx # Skeleton card for loading
│
├── pages/
│ └── Home.jsx # Masonry gallery with infinite scroll
│
├── App.jsx # Route configuration
└── main.jsx # App entry point with QueryClientProvider


---

## 🛠️ Getting Started

### 1. Clone the repo

git clone https://github.com/your-username/infinite-gallery.git

cd infinite-gallery

2. Install dependencies

npm install

3. Run the app locally

npm run dev

App will be available at: http://localhost:5173

🔗 Routes

| Route               | Description                             |
| ------------------- | --------------------------------------- |
| `/`                 | Home page with masonry gallery          |
| `/g/:generation_id` | Individual generation route (mock data) |


📌 Notes
All data is mock-simulated (no real API).

Placeholder fallback is used for broken images.

Styled using Tailwind’s utility-first approach.

🤝 Submitted For
Frontend Developer Internship — Dheyo AI
Location: Hyderabad
Candidate: Udaykumar N.
