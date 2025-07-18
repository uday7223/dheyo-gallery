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
- Mock API simulation** with pagination using `offset` and `limit`


---

## 🛠️ Getting Started

### 1. Clone the repo

git clone https://github.com/uday7223/dheyo-gallery.git

cd dheyo-gallery

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


🎬 Notes
All media files (img0.jpg, video0.mp4, etc.) are locally placed inside public/assets/images and public/assets/videos.

You can easily swap with live image/video URLs from Unsplash, Pexels, or public APIs. form mockData.js file

The layout and load behavior are fully responsive.

🤝 Submitted For
Frontend Developer Internship — Dheyo AI
Location: Hyderabad
Candidate: Udaykumar N.
