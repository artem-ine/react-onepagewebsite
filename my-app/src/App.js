import './App.css';
import './prismic.js';
import Home from './components/Home.js';
import Article from './components/Article.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:uid" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
