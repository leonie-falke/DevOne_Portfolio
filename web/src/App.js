import './style/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import BlogPage from './components/Blog';


function App() {
 
  return (
    <div className="App">
      <Navbar />
      <div className="RoutesContainer">
        <Routes>
          <Route element = {<HomePage />} path='/' />
          <Route element = {<BlogPage />} path='/blog'/>
        </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
