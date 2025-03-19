import React from 'react'
import '../App.css';
import Header from '../components/Header';
import NewsPage from '../components/NewsArea';
import NewsBlogArea from '../components/NewsBlogArea';
import Footer from '../components/Footer';

function News() {
    return (
        <>
            <Header />
            <NewsPage />
            <NewsBlogArea />
            <Footer />
        </>
    )
}

export default News