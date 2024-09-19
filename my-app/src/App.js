import './App.css';
import './prismic.js';
import Home from './components/Home.jsx';
import Article from './components/Article.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:uid" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
