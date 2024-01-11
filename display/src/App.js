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
import LoginButton from './Auth0/Loginbtn';
import LogoutButton from './Auth0/Logoutbtn';
import Profile from './Auth0/profile';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div className="App">

      <Maincontext>
     <Navbar/>
     {/* <main className="column">
     {process.env.REACT_APP_Domain_Name}
      <h1>Auth0 Login</h1>
     {process.env.REACT_APP_Domain_Name }  
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main> */}
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
