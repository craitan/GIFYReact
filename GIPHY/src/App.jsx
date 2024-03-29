import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Trending from './components/Trending/Trending'
import Favorites from './components/Favorites/Favorites'
import MyUploads from './components/MyUploads/MyUploads'
import Upload from './components/Upload/Upload'
import NavBar from './components/NavBar/NavBar'
import GifDetails from './components/Views/GifDetails'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/trending" />} />
          <Route path="trending" element={<Trending />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="upload" element={<Upload />} />
          <Route path="myuploads" element={<MyUploads />} />
          <Route path="details/:id" element={<GifDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
