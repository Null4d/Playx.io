import React from 'react'
import Header from '../components/Header';
import TournamentArea from '../components/TournamentArea';
import TournamentPlay from '../components/TournamentPlay';
import Footer from '../components/Footer';

function Tournament() {
    return (
        <>
            <Header />
            <TournamentArea />
            <TournamentPlay />
            <Footer />
        </>
    )
}

export default Tournament