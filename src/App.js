import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from "./component/landing/landing";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Landing />}></Route>
          {/* <Route path='/login' element={<LogIn/>}></Route> */}

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
