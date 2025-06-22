import './App.css';

import { NavLink, Routes, Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <h1>Mind the gap</h1>
    <Navigation />
    <Main />
  </div>
);

export default App;

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/data'>Data</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h2>Home</h2>
    <p>Welcome to mind the gap.</p>
    <img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' />
  </div>
);

const About = () => (
  <div className='about'>
    <h2>About Us</h2>
    <p id='content'>Inspired by our journey as women in STEM we wanted to draw attention to the disparity in education between genders.</p>
  </div>
);

const Data = () => (
  <div className='data'>
    <h2>Data</h2>
    <p>Data be here</p>
  </div>
);



const Main = () => (
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/data' element={<Data />}></Route>
  </Routes>
);