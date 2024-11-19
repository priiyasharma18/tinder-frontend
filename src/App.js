import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from "./component/landing/landing";
import Navbar from "./component/navbar/navbar";
import Nav from './component/navbar/navbar2';
import Login from './component/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/login' element={<Nav/>}></Route>
        </Routes>

        <Routes>

          <Route path='/' element={<Landing />}></Route>
          <Route path='/login' element={<Login/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
