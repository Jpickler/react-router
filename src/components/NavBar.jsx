
import {Route, Routes, Link} from 'react-router-dom';
import  Blue from './Blue';
import  Red from './Red';
import  Green from './Green';
import Home from './Home';

const Navbar = () => {

  return (
    <>
      <div id="navbar">
        <Link to='/components/Blue'>Blue</Link>
        <Link to='/components/Red'>Red</Link>
        <Link to='/components/Green'>Green</Link>
        <Link to='/components/Home'>Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/components/Blue' element={<Blue />} />
          <Route path='/components/Red' element={<Red />} />
          <Route path='/components/Green' element={<Green />} />
          <Route path='/components/Home' element={<Home />} />
        </Routes>
      </div>

    </>

  );


}

export default Navbar;