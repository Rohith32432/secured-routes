import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/admin';
import User from './components/user';
import Delall from './components/delall';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/admin' element={<Admin/>}>
        <Route path='del' element={<Delall/>}/>
      </Route>
      <Route path='/user' element={<User/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
