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
    <p>Welcome to our website</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h2>About Us</h2>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
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