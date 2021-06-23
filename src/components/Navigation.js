import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";

const Navigation = (props) => {
    return (
        <nav>
                <ul>
                    <li>
                        <h3>Swimming World</h3>
                    </li>
                    <li>
                        <Link to = "/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to = "/competitions">
                            <FaMedal />
                            Competititons
                        </Link>
                    </li>
                    <li>
                        <Link to = "/socialnetwork">
                            <FaPortrait />
                            Social Network
                        </Link>
                    </li>
                    <li>
                        <Link to = "/games">
                            <FaGamepad />
                            Games
                        </Link>
                    </li>
                    <li>
                        <FaUserAlt />
                        {props.name}
                    </li>
                </ul>
            </nav>
    )
}

Navigation.propTypes = {
    name: PropTypes.string
}

export default Navigation
