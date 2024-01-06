import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/admin';
import User from './components/user/user';
import Delall from './components/Admin/delall';
import Viewall from './components/Admin/Viewall';
import Status from './components/Admin/Status';
import Login from './components/Login/Login'
import {Maincontext} from './components/Maincontext';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Maincontext>
     <Routes>
      <Route path='/admin' element={<Admin/>}>
        <Route path='del' element={<Delall/>}/>
        <Route path='viewall' element={<Viewall/>}/>
        <Route path='staus' element={<Status/>}/>
      </Route>
      <Route path='/user' element={<User/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes></Maincontext>
    </div>
  );
}

export default App;
