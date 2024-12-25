import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import NftItems from './components/NftItems';
import About from './components/About';
import Swiper from './components/Swiper';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <NftItems />
      <div className='about-swiper-bg'>
      <About />
      <Swiper />
      </div>
    </>
  );
}

export default App;
