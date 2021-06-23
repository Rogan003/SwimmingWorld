import React from 'react'

const Game = (props) => {
    return (
        <section>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <button>PLAY</button>
        </section>
    )
}

export default Game
