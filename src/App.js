import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/allProjects' element={<AllProjects />}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
