import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import NftItems from './components/NftItems';
import About from './components/About';
import Swiper from './components/Swiper';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import TeamArea from './components/TeamArea';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Hero />
      <NftItems />
      <div className='about-swiper-bg'>
        <About />
        <Swiper />
      </div>
      <SideBar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar}  />
      <TeamArea />
      <Footer />
    </>
  );
}

export default App;
