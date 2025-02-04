import React from 'react'
import Header from '../components/Header';
import PagesProductArea from '../components/PagesProductArea';
import PagesProduct from '../components/PagesProduct';
import Footer from '../components/Footer';

function PagesShop() {
    return (
        <>
            <Header />
            <PagesProductArea />
            <PagesProduct />
            <Footer />
        </>
    )
}

export default PagesShop