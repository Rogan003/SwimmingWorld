import React from 'react'
import MenuPart from "./MenuPart"
import ISL from "../pics/islogo.png"
import SN from "../pics/sn.jpg"
import Games from "../pics/games.jpg"

const Menu = () => {
    return (
        <article className = "menu">
            <MenuPart part = "Competitions" pic = {ISL} description = "Follow all the important competitions and always be on track with the results." link = "/competitions" />
            <MenuPart part = "Social Network" pic = {SN} description = "Talk to other swimming fans, professional athletes and coaches." link = "/socialnetwork"  />
            <MenuPart part = "Games" pic = {Games} description = "Relax and play some video games." link = "/games" />
        </article>
    )
}

export default Menu
