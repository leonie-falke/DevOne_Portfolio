import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import BlogPage from './components/Blog';
import Imprint from './components/Imprint';


function App() {
 
  return (
    <div className="bg-[#faf4ed] dark:bg-[#232136] h-full">
      <Navbar />
      <div className="RoutesContainer">
        <Routes>
          <Route element = {<HomePage />} path='/' />
          <Route element = {<BlogPage />} path='/blog'/>
          <Route element = {<Imprint />} path='/imprint'/>
        </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
