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
import { Maincontext } from './components/Maincontext';
import LoginButton from './Auth0/Loginbtn';
import LogoutButton from './Auth0/Logoutbtn';
import Profile from './Auth0/profile';
import { useAuth0 } from '@auth0/auth0-react';
import { AdminAuth } from './MiddleWare/Requried';
import Chart from './components/Admin/Chart';
import Developr from './components/Devloper/dev';
import Individual from './components/Devloper/individual';
import Activity from './Activity';
import Test from './MiddleWare/Testing/social-media/Test';
import Main from './MiddleWare/Testing/Main';
import ViewallUsers from './MiddleWare/Testing/ViewallUsers';
function App() {
  // const { isLoading, error } = useAuth0();


  return (
    <div className="App">

      <Maincontext>
        <Navbar />

        <Routes>
          {/* <Route path='/' element={<Activity/>}/> */}
          <Route element={<AdminAuth />}>

            <Route path='/admin' element={<Admin />}>
              <Route path='del' element={<Delall />} />
              <Route path='viewall' element={<Viewall />} />
              <Route path='staus' element={<Status />} />
            </Route>
            </Route>
          <Route path='/user' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path='/stat' element={<Chart />} />
          <Route path='start/:id' element={<Individual />}></Route>
          <Route path='/dev' element={<Developr />}>
          </Route>

          <Route path='/test' element={<Main />}>
          <Route path='logintest' element={<Test/>} />
          <Route path='viewall' element={<ViewallUsers/>}/>
          </Route>

        </Routes></Maincontext>
    </div>
  );
} 

export default App;
