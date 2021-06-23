import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import Menu from "./Menu"
import Picture from "../pics/swbackground.jpg"

let tekst = "We are swimming world. We are the best platform for all people that love swimming. We have everything you need, from competitons, through social network and interactions with professionals, to video games!"
let alt = "Cool swimming background"

const Home = () => {
    return (
        <div className = "main">
            <Header />
            <AboutUs tekst = {tekst} pic = {Picture} picalt = {alt} />
            <Menu />
            <Footer />
        </div>
    )
}

export default Home
