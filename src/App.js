import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/MainSection/Breakfast/Breakfast';
import Dinner from './Pages/MainSection/Dinner/Dinner';
import Home from './Pages/MainSection/Home/Home';
import Lunch from './Pages/MainSection/Lunch/Lunch';
import Footer from './Pages/SharedPages/Footer/Footer';
import Navbars from './Pages/SharedPages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbars />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
