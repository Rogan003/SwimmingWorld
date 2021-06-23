import React from 'react'
import {Link} from 'react-router-dom'
const MenuPart = (props) => {
    return (
        <section>
            <img src={props.pic} alt={props.picalt} />
            <h4>{props.part}</h4>
            <p>{props.description}</p>
            <Link to = {props.link}>
                <button>{props.part}</button>
            </Link>
        </section>
    )
}

export default MenuPart
