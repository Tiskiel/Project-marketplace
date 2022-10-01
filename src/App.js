import Header from './components/header/header';
import style from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Categories from './components/Categories/Categories';
import Manga from './components/Manga/Manga';
import BD from './components/BD/BD';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { v4 as uuid } from 'uuid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function App() {
  const unique_id = uuid();

  const listItems = [
    {
      "name": 'Food wars',
      "id": unique_id,
      "price": 10,
      "promo": true,
      "categories": "manga",
      "resume": "Sôma a grandi dans les cuisines du restaurant familial et se prépare depuis toujours à prendre la succession.",
      "pics": './foodWars.jpg'
    },
    {
      "name": 'Food wars',
      "id": unique_id,
      "price": 12,
      "promo": false,
      "categories": "manga",
      "resume": "Sôma a grandi dans les cuisines du restaurant familial et se prépare depuis toujours à prendre la succession.",
      "pics": './foodWars.jpg'
    },
    {
      "name": 'Food wars',
      "id": unique_id,
      "price": 12,
      "promo": false,
      "categories": "manga",
      "resume": "Sôma a grandi dans les cuisines du restaurant familial et se prépare depuis toujours à prendre la succession.",
      "pics": './foodWars.jpg'
    },
    {
      "name": 'Food wars',
      "id": unique_id,
      "price": 12,
      "promo": false,
      "categories": "manga",
      "resume": "Sôma a grandi dans les cuisines du restaurant familial et se prépare depuis toujours à prendre la succession.",
      "pics": './foodWars.jpg'
    },
    {
      "name": 'Food wars',
      "id": unique_id,
      "price": 12,
      "promo": false,
      "categories": "manga",
      "resume": "Sôma a grandi dans les cuisines du restaurant familial et se prépare depuis toujours à prendre la succession.",
      "pics": './foodWars.jpg'
    },
    {
      "name": 'Food wars',
      "id": unique_id,
      "price": 12,
      "promo": false,
      "categories": "manga",
      "resume": "Sôma a grandi dans les cuisines du restaurant familial et se prépare depuis toujours à prendre la succession.",
      "pics": './foodWars.jpg'
    }
    
      
  ];

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
        <Row className={`${style.paddingBottom} ${style.paddingTop}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/BD' element={<BD />} />
            <Route path='/categories/manga' element={<Manga listItems ={listItems} />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;