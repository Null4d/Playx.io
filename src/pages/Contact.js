import React from 'react'
import '../App.css';
import Header from '../components/Header';
import ContactArea from '../components/ContactArea';
import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';
import Footer from '../components/Footer';

function NewsBlog() {
    return (
        <>
            <Header />
            <ContactArea />
            <ContactInfo />
            <ContactMap />
            <Footer />
        </>
    )
}

export default NewsBlog