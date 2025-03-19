import React from 'react'
import '../App.css';
import Header from '../components/Header';
import PagesArea from '../components/PagesArea';
import PagesGamingShop from '../components/PagesGamingShop';
import Footer from '../components/Footer';

function Pages() {
    return (
        <>
            <Header />
            <PagesArea />
            <PagesGamingShop />
            <Footer />
            
        </>
    )
}

export default Pages