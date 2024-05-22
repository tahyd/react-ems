import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Employee from './components/Employee';
import Department from './components/Department';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    
       <Router>
        <NavBar/>
             <Routes>
               <Route path='' element={<Home/>}/>
               <Route exact={false} path='about' element={<About/>}/>
               
               <Route path='employee' element={<Employee/>}/>
               <Route path='department' element={<Department/>}/>
               <Route path='*' element={<PageNotFound/>}/>
             </Routes>

       </Router>
  );
}

export default App;
