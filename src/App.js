import Header from './components/header/header';
import style from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Categories from './components/Categories/Categories';
import Manga from './components/Manga/Manga';
import BD from './components/BD/BD';
import Footer from './components/Footer/Footer';
import About from './components/About/About';


function App() {
  const listItems = [
    {
      "name": 'Home',
      "id": '/',}
      
  ];

  return (
    <div className={style.flex}>
      <header><Header /></header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/BD' element={<BD />} />
          <Route path='/categories/manga' element={<Manga />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
