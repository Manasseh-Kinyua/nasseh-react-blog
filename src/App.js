import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          
          <Route path='/' element= {<Home />} exact/>
          <Route path='/create' element= {<Create />} />
          <Route path='/blogs/:id' element= {<BlogDetails />} />

        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
