import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
