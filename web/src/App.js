import './style/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="RoutesContainer">
        <Routes>
          <Route element = {<HomePage />} path='/' />
          <Route element = {<ProjectsPage />} path='/projects'/>
        </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
