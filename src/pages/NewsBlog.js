import React from 'react'
import '../App.css';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import BlogDetailsArea from '../components/BlogDetailsArea';
import Footer from '../components/Footer';

function NewsBlog() {
    return (
        <>
            <Header />
            <BlogDetails />
            <BlogDetailsArea />
            <Footer />
        </>
    )
}

export default NewsBlog