import React from 'react'
import Header from '../components/Header';
import Bread from '../components/breadcrumb';
import AboutArea from '../components/AboutArea';
import AboutServices from '../components/AboutServices';
import TeamArea from '../components/TeamArea';
import Footer from '../components/Footer';


function AboutUs() {
    return (
        <>
            <Header />
            <Bread />
            <AboutArea />
            <AboutServices />
            <TeamArea />
            <Footer />
        </>
    )
}

export default AboutUs