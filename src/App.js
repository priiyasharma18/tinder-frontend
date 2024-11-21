import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from "./component/landing/landing";
import Navbar from "./component/navbar/navbar";
import Nav from './component/navbar/navbar2';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import Profile from './component/profile/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/login' element={<Nav/>}></Route>
          <Route path='/signup' element={<Nav/>}></Route>
          <Route path='/profile' element={<Nav/>}></Route>
        </Routes>

        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
