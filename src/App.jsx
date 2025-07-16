import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import GalleryDetail from './pages/GalleryDetail'


function App() {

  return (
   <>
     <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/g/:generation_id" element={<GalleryDetail />} />
      </Routes>
    </div>
   </>
  )
}

export default App
