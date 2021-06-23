import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import Picture from "../pics/isl.jpg"
import Teams from "./Teams"

let tekst = "The International Swimming League (ISL) is an annual professional swimming league, established in 2019. It features a team-based competition format with fast-paced race sessions. In 2019, the regular season started in October and the Final Match was held in December."
let alt = "ISL logo"

const Competitions = () => {
    return (
        <div>
            <Header />
            <h2>ISL</h2>
            <AboutUs tekst = {tekst} pic = {Picture} picalt = {alt} />
            <Teams />
            <Footer />
        </div>
    )
}

export default Competitions
