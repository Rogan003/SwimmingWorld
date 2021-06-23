import React from 'react'
import Game from './Game.js'

const GamesListed = () => {
    return (
        <article className = "games">
            <Game name = "Swimming career simulator" description = "Try to have a swimming career and see how it goes!" />
            <Game name = "Olympics" description = "Dive in and swim at the olympic games!" />
            <Game name = "ISL swimmer" description = "Compete on the highest level and swim at the ISL" />
        </article>
    )
}

export default GamesListed
