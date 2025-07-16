import './App.css';

import { NavLink, Routes, Route } from 'react-router-dom';

import sallyimage from './assets/sally.png'
import imanimage from './assets/iman.png'

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
      <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h2>Home</h2>
    <p class='homep'>Welcome to mind the gap.</p>
    <div class="flex-grid">
      <div class="col"><figure><img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' /> <figcaption class='f1'> This is data about women and girls and education and things of the matter and so on and so forth.</figcaption></figure></div>
      <div class="col"><figure><img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' /> <figcaption class='f2'> This is data about women and girls and education and things of the matter and so on and so forth.</figcaption></figure></div>
      <div class="col"><figure><img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' /> <figcaption class='f1'> This is data about women and girls and education and things of the matter and so on and so forth.</figcaption></figure></div>
      <div class="col"><figure><img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' /> <figcaption class='f2'> This is data about women and girls and education and things of the matter and so on and so forth.</figcaption></figure></div>
      <div class="col"><figure><img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' /> <figcaption class='f1'> This is data about women and girls and education and things of the matter and so on and so forth.</figcaption></figure></div>
      <div class="col"><figure><img src='https://plus.maths.org/content/sites/plus.maths.org/files/articles/2022/square/square_web.png' alt='this will be data thumbnail' /> <figcaption class='f2'> This is data about women and girls and education and things of the matter and so on and so forth.</figcaption></figure></div>
    </div>
  </div>
);

const About = () => (
  <div className='about'>
    <h2>About Mind The Gap</h2>
    <p class='aboutp'>Inspired by our journey as women in STEM we wanted to draw attention to the disparity in education between genders. Inspired by our journey as women in STEM we wanted to draw attention to the disparity in education between genders. Inspired by our journey as women in STEM we wanted to draw attention to the disparity in education between genders. Inspired by our journey as women in STEM we wanted to draw attention to the disparity in education between genders. Inspired by our journey as women in STEM we wanted to draw attention to the disparity in education between genders.</p>
    <h2>About Us</h2>
    <div class='avatars'>
      <img class='avatar' src={imanimage} alt='iman' />
      <img class='avatar' src={sallyimage} alt='sally' />
    </div>
    <div class='aboutuscols'>
      <p class="aboutusp1"> We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.</p>
      <p class="aboutusp2"> We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.We are Iman and Sally, we studied chemistry and software engineering. We are women in STEM.</p>
    </div>
  </div >
);

const Contact = () => (
  <div className='contact'>
    <h2>Contact Us</h2>
    <p class='contactp'>Please</p>
    <div class='container'>
      <form action="action_page.php">



      </form>
    </div>
  </div>
);



const Main = () => (
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
  </Routes>
);