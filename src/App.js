// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Aboutus from './components/Aboutus/Aboutus';
import Careers from './components/Careers/Carrers';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="navbar"/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Aboutus/>} path="/aboutus"/>
          <Route element={<Careers/>} path="/careers"/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
