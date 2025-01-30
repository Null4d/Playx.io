import React from 'react'
import Header from '../components/Header';
import TournamentArea from '../components/TournamentArea';
import TournamentPlay from '../components/TournamentPlay';
import TournamentList from '../components/TournamentList';
import Footer from '../components/Footer';

function Tournament() {
    return (
        <>
            <Header />
            <TournamentArea />
            <TournamentPlay />
            <TournamentList />
            <Footer />
        </>
    )
}

export default Tournament